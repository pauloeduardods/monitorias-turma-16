import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    const { name, email, quantity, buyedPrice, price } = this.props;
    if (!name || !email) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <h2>Quantidade</h2>
        <p>{quantity}</p>
        <h2>Valor pago</h2>
        <p>{quantity * buyedPrice}</p>
        <h2>Valor atual</h2>
        <p>{quantity * price}</p>
        <Link to="/login">Login</Link>
        <Link to="/">Preco</Link>
        <Link to="/buy">Comprar</Link>
      </div>
    );
  }
}

User.propTypes = {
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

export default connect(mapStateToProps)(User);
