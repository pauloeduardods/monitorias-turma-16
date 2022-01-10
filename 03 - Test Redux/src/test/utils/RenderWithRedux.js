import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';

const renderWithRedux = (
  component, { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store
});

export default renderWithRedux;