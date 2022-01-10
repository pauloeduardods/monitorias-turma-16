import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './utils/RenderWithRouterAndRedux';
import { setPriceFetch } from '../Redux/actions/priceAction';
import App from '../App';

describe('App', () => {
  it('testar usuario', async () => {
    const { history, store } = renderWithRouterAndRedux(<App />);
    history.push('login');
    expect(store.getState().user.name).toBe('');
    const nameInput = screen.getByLabelText(/nome/i);
    fireEvent.change(nameInput, { target: { value: 'teste' } });
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    const submitButton = screen.getByText(/entrar/i);
    fireEvent.click(submitButton);
    expect(history.location.pathname).toBe('/user');
    await waitFor(() => expect(store.getState().user.name).toBe('teste'));
    await waitFor(() => expect(store.getState().user.email).toBe('email@email.com'));
    const userName = screen.getAllByText(/teste/i);
    expect(userName[0]).toBeInTheDocument();
    const userEmail = screen.getAllByText(/email@email.com/i);
    expect(userEmail[0]).toBeInTheDocument();
  });
  it('Testa o thunk', async () => {
    globalThis.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          data: {
            last: 234567.89,
          },
        }),
      }),
    );
    const { store } = renderWithRouterAndRedux(<App />);
    store.dispatch(setPriceFetch());
    await waitFor(() => expect(store.getState().price.price).toBe(234567.89));
    const price = screen.getByText(/234567.89/i);
    expect(price).toBeInTheDocument();
  });
});




