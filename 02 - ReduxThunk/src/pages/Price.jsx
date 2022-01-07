import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPriceAction } from "../Redux/actions/priceAction";

class Price extends React.Component {
  constructor() {
    super();
    this.getPrice = this.getPrice.bind(this);
    this.timeout = null;
  }

  getPrice() {
    this.timeout = setTimeout(async() => {
      const { setPrice } = this.props;
      const response = await fetch('https://api.biscoint.io/v1/ticker');
      const data = await response.json();
      setPrice(data.data.last);
      this.getPrice();
    }, 2000);
  }

  componentDidMount() {
    this.getPrice();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { price } = this.props;
    return (
      <div>
        <h1>Preço atual do bitcoin</h1>
        <p>{price}</p>
        <Link to="/login">Login</Link>
        <Link to="/user">Carteira</Link>
        <Link to="/buy">Comprar</Link>
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
  setPrice: (price) => dispatch(setPriceAction(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Price);
