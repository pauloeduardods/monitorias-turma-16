import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './utils/RenderWithRouterAndRedux';
import { setPriceFetch } from '../Redux/actions/priceAction';
import App from '../App';

describe('App', () => {
  it('testar usuario', async () => {
    // Neste teste, vamos simular o usuário fazendo login, e vamos verificar se atualiza o estado no redux.
    const { history, store } = renderWithRouterAndRedux(<App />);
    history.push('login');
    // Verificamos se o user.name no estado do Redux é uma string vazia.
    expect(store.getState().user.name).toBe('');
    // Simulamos o usuário fazendo login.
    const nameInput = screen.getByLabelText(/nome/i);
    fireEvent.change(nameInput, { target: { value: 'teste' } });
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    const submitButton = screen.getByText(/entrar/i);
    // Enviamos o formulário.
    fireEvent.click(submitButton);
    // Verificamos se a rota atual é /user.
    expect(history.location.pathname).toBe('/user');
    // Como o redux é assíncrono, precisamos esperar o estado mudar.
    // Para isso, usamos o waitFor, onde ele espera que ocorra a mudança esperada.
    await waitFor(() => expect(store.getState().user.name).toBe('teste'));
    await waitFor(() => expect(store.getState().user.email).toBe('email@email.com'));
    // Vemos se temos o texto do nome inserido na pagina
    const userName = screen.getByRole('heading', { name: /teste/i, level: 1 });
    expect(userName).toBeInTheDocument();
    const userEmail = screen.getByText(/email@email.com/i);
    expect(userEmail).toBeInTheDocument();
  });
  it('Testa o thunk', async () => {
    // Como o retorno da api é o preço de uma criptomoeda e nao podemos saber qual vai ser o proximo valor entao vamos mockar o fetch.
    globalThis.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(
          // Simulamos o retorno da api.
          {
          data: {
            last: 234567.89,
          },
        }),
      }),
    );
    const { store } = renderWithRouterAndRedux(<App />);
    // Aqui disparamos uma action que vai chamar o fetch.
    store.dispatch(setPriceFetch());
    // Esperamos o valor ser igaual ao retorno da api.
    await waitFor(() => expect(store.getState().price.price).toBe(234567.89));
    // Verificamos se o valor esta na pagina.
    const price = screen.getByText(/234567.89/i);
    expect(price).toBeInTheDocument();
  });
});




