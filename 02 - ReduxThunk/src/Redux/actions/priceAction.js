import getPrice from "../../services/getPrice";
export const SET_PRICE = 'SET_PRICE';

export const setPriceAction = (price) => ({
  type: SET_PRICE,
  payload: price,
});

// Thunk com funçao
export function setPriceFetch1() {
  return (dispatch) => {
    return getPrice()
    .then((res) => dispatch(setPriceAction(res.data.last)));
  }
}

// Thunk com arrow function
export const setPriceFetch = () => (dispatch) => {
  return getPrice().then((res) => dispatch(setPriceAction(res.data.last)));
}

//O thunk é uma funçao que retorna uma outra funçao que é chamada quando a action é disparada.
//Com a utilizaçao do thunk você pode fazer chamadas assíncronas e disparar múltiplas actions.
//O thunk libera o acesso ao dispatch dentro da ACTION como no caso do setPriceFetch.
//Ou seja quando disparamos a action do thunk na verdade estamos disparando a action do setPriceAction.
//Porém ela nao é disparada instantaneamente, ela é disparada assim que a requisição for concluida.
//O dispatch que recebemos na linha 11 é o mesmo dispatch que recebemos nos componentes no mapDispatchToProps.
// const mapDispatchToProps = (dispatch) => ({ ... }) 