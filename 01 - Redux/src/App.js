import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions';
import './App.css';

class App extends React.Component {
  
  // Exemplo usando o dispatch com uma requisição assíncrona dentro de um componente
  // async getApiValue() {
  //   const response = await fetch('https://api.biscoint.io/v1/ticker');
  //   const json = await response.json();
  //   return json.data.last;
  // }
  // async componentDidMount() {
  //   const value = await this.getApiValue();
  //   this.props.incremet(value);
  // }

  render() {
    const { incremet, decrement, current_number } = this.props;
    return (
      <div className="App">
        {/* Exemplo usando o state */}
        <h1>{ current_number }</h1>
        {/* Exemplo usando o dispatch */}
        <button onClick={ () => incremet() }>+1</button>
        <button onClick={ () => incremet(10) }>+10</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => decrement(10)}>-10</button>
      </div>
    );
  }
}

// mapDispatchToProps é uma função usada para disparar actions para o reducer
const mapDispatchToProps = (dispatch) => {
  return {
    incremet: (value = 1) => dispatch(incrementAction(value)),
    decrement: (value = 1) => dispatch(decrementAction(value)),
  };
};

// mapStateToProps é uma função usada para pegar o estado atual do reducer
const mapStateToProps = (state) => {
  return {
    // Quando utilizar o combine reducers você precisa indicar de qual reducer quer pegar o estado, no caso o numberReducer
    current_number: state.numberReducer.current_number,
  };
};

// Os valores retornados pelas funções mapStateToProps e mapDispatchToProps serao passados para o componente como props e dai podemos usar essas props no componente
App.propTypes = {
  incremet: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  current_number: PropTypes.number.isRequired,
};

// O connect é uma fução do react-redux que faz a conecção entre o componente e o reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);
