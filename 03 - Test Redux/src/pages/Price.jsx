import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPriceFetch } from "../Redux/actions/priceAction";

class Price extends React.Component {
  constructor() {
    super();
    this.getPrice = this.getPrice.bind(this);
    this.timeout = null;
  }

  // getPrice() { //sem o thunk
  //   this.timeout = setTimeout(async() => {
  //     const { setPrice } = this.props;
  //     const response = await fetch('https://api.biscoint.io/v1/ticker');
  //     const data = await response.json();
  //     setPrice(data.data.last);
  //     this.getPrice();
  //   }, 2000);
  // }

  getPrice() {
    this.timeout = setInterval(() => { //com o thunk
      const { setPrice } = this.props;
      setPrice();
    }, 2000)
  }

  componentDidMount() {
    this.getPrice();
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const { price } = this.props;
    return (
      <div>
        <h1>Preço atual do bitcoin</h1>
        <p data-testid="price">{price}</p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/user">Carteira</Link></p>
        <p><Link to="/buy">Comprar</Link></p>
      </div>
    );
  }
}

Price.propTypes = {
  price: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  price: state.price.price,
});

const mapDispatchToProps = (dispatch) => ({
  // setPrice: (price) => dispatch(setPriceAction(price)), //sem o thunk
  setPrice: () => dispatch(setPriceFetch()), //com o thunk
});

export default connect(mapStateToProps, mapDispatchToProps)(Price);
