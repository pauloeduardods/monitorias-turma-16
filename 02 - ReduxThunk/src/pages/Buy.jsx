import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setPurchaseAction } from "../Redux/actions/userActions";

class Buy extends React.Component {
  constructor(props) {
    super();
    this.state = {
      quantity: Number(props.quantity),
      buyedPrice: Number(props.buyedPrice),
    };
    this.onSubmit = this.onSubmit.bind(this);
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
        <Link to="/login">Login</Link>
        <Link to="/user">Carteira</Link>
        <Link to="/">Precor</Link>
      </>
    );
  }
}

Buy.propTypes = {
  setPurchese: PropTypes.func.isRequired,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Buy);