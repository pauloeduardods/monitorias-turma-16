// Aqui definimos os types da nossa action, definimos esses valores dessa maneira para que nao ocorra erros de digitação
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Aqui definimos a action que sera disparada pelo dispatch, ela é responsavel por ser a estrutura de comunicação quando ocorre um evento de dispatch
const incrementAction = (value = 1) => ({
  type: INCREMENT,
  payload: value,
});

const decrementAction = (value = 1) => ({
  type: DECREMENT,
  payload: value,
});

export { INCREMENT, DECREMENT, incrementAction, decrementAction };