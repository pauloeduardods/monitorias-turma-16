import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../../Redux/reducers';

// Essa solução é uma mistura da renderWithRouter e renderWithRedux.
// Com ela poderemos testar uma aplicação com o Redux e o Router.

const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(rootReducers, initialState, applyMiddleware(thunk)),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={history}>
      <Provider store={store}>
        {component}
      </Provider>
    </Router>,
  ),
  history,
  store,
});

export default renderWithRouterAndRedux;
