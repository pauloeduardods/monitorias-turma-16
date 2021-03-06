import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setPurchaseAction } from "../Redux/actions/userActions";
import { setPriceFetch } from "../Redux/actions/priceAction";

class Buy extends React.Component {
  constructor(props) {
    super();
    this.state = {
      quantity: Number(props.quantity),
      buyedPrice: Number(props.buyedPrice),
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.getPrice = this.getPrice.bind(this); //sem o thunk
  }

  // async getPrice() { //sem o thunk 
  //   const { setPrice } = this.props;
  //   const response = await fetch('https://api.biscoint.io/v1/ticker');
  //   const data = await response.json();
  //   setPrice(data.data.last);
  // }

  componentDidMount() {
    // this.getPrice(); //sem o thunk
    const { setPrice } = this.props; //com o thunk
    setPrice(); //com o thunk
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { quantity, buyedPrice } = this.state;
    const { setPurchese, history } = this.props;
    setPurchese(Number(buyedPrice), Number(quantity));
    history.push('/user');
  }

  render() {
    const { name, email, price } = this.props;
    const { quantity, buyedPrice } = this.state;
    if (!name || !email) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <form onSubmit={ this.onSubmit }>
          <h1>
            Preço atual:
            <span>{price}</span>
          </h1>
          <h1>Comprar Bitcoins</h1>
          <label htmlFor="quantity">Quantidade de BTC: </label>
          <input
            type="number"
            id="quantity"
            step="0.000001"
            min="0"
            max="21000000"
            value={ quantity }
            onChange={ (e) => this.setState({ quantity: e.target.value }) }
          />
          <label htmlFor="buyedPrice">Preço: </label>
          <input
            type="number"
            id="buyedPrice"
            value={ buyedPrice }
            onChange={ (e) => this.setState({ buyedPrice: e.target.value }) }
          />
          <button type="submit">Comprar</button>
        </form>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/user">Carteira</Link></p>
        <p><Link to="/">Precor</Link></p>
      </>
    );
  }
}

Buy.propTypes = {
  setPurchese: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  buyedPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};


const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  quantity: state.user.quantity,
  buyedPrice: state.user.price,
  price: state.price.price,
});

const mapDispatchToProps = (dispatch) => ({
  setPurchese: (price, quantity) => dispatch(setPurchaseAction(price, quantity)),
  // setPrice: (price) => dispatch(setPriceAction(price)), //sem o thunk
  setPrice: () => dispatch(setPriceFetch()), //com o thunk
});

export default connect(mapStateToProps, mapDispatchToProps)(Buy);