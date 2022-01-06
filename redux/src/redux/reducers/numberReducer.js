import { INCREMENT, DECREMENT } from "../actions"

// Aqui definimos o estado inicial do nosso reducer numberReducer
const INITIAL_STATE = {
  current_number: 0,
}

// Aqui definimos o reducer, que recebe o estado atual e a action
// A action é um objeto que contem o type e/ou payload, onde o payload é um objeto que contem todas as informações que queremos passar para o reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        current_number: state.current_number + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        current_number: state.current_number - action.payload,
      }
    default:
      return state;
  }
}

export default reducer;