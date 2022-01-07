import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Price extends React.Component {
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

export default connect(mapStateToProps)(Price);
