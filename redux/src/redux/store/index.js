import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// Create Store é uma função do redux que cria o store, ela recebe como primeiro parametro seu(s) reducer(s) e no segundo parametro no caso estamos passando a funçao composeWithDevTools que é uma função do redux-devtools-extension que permite a visualização do estado do redux no navegador
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;