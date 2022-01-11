import {
  SET_PRICE
} from "../actions/priceAction";

const INITIAL_STATE = {
  price: 0,
};

const priceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRICE:
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export default priceReducer;
