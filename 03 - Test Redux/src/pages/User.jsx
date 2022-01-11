import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import getPrice from "../services/getPrice"; //sem o thunk
import { setPriceFetch, setPriceAction } from "../Redux/actions/priceAction";

class User extends React.Component {
  // constructor() { //sem o thunk
  //   super();
  //   this.getPrice = this.getPrice.bind(this);
  // }

  // async getPrice() { //sem o thunk e sem a pasta services
  //   const { setPrice } = this.props;
  //   const response = await fetch('https://api.biscoint.io/v1/ticker');
  //   const data = await response.json();
  //   setPrice(data.data.last);
  // }
  
  componentDidMount() {
    // this.getPrice();

    //com o thunk
    const { setPrice } = this.props;
    setPrice();

    //sem o thunk
    // const { setPriceAction } = this.props;
    // getPrice().then(data => {
    //   setPriceAction(data.data.last);
    // });
  }

  render() {
    const { name, email, quantity, buyedPrice, price } = this.props;
    if (!name || !email) {
      return <Redirect to="/login" />
    }
    
    return (
      <div>
        <h2>Preço atual</h2>
        <p>{price}</p>
        <h2>Quantidade</h2>
        <p>{quantity}</p>
        <h2>Valor pago</h2>
        <p>{(quantity * buyedPrice).toFixed(2)}</p>
        <h2>Valor atual</h2>
        <p>{(quantity * price).toFixed(2)}</p>
        <h2>Lucro atual</h2>
        <p>{((quantity * price) - (quantity * buyedPrice)).toFixed(2)}</p>
        <h3>Lucro em %</h3>
        <p>{(((price / buyedPrice) - 1) * 100).toFixed(2)}%</p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/">Preco</Link></p>
        <p><Link to="/buy">Comprar</Link></p>
      </div>
    );
  }
}

User.propTypes = {
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
  // setPrice: (price) => dispatch(setPriceAction(price)), //sem o thunk
  setPrice: () => dispatch(setPriceFetch()),
  setPriceAction: (price) => dispatch(setPriceAction(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
