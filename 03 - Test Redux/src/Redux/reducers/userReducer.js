import {
  SET_USER,
  SET_PURCHASE
} from "../actions/userActions";

const INITIAL_STATE = {
  name: "",
  email: "",
  price: 0,
  quantity: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case SET_PURCHASE:
      return {
        ...state,
        price: action.payload.price,
        quantity: action.payload.quantity,
      };
    default:
      return state;
  }
};

export default userReducer;
