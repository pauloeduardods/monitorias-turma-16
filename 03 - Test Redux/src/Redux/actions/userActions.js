export const SET_USER = 'SET_USER';
export const SET_PURCHASE = 'SET_PURCHASE';

export const setUserAction = (name, email) => ({
  type: SET_USER,
  payload: {
    name,
    email,
  },
});

export const setPurchaseAction = (price, quantity) => ({
  type: SET_PURCHASE,
  payload: {
    price,
    quantity,
  },
});
