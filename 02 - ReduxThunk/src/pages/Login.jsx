import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { setUserAction } from "../Redux/actions/userActions";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
    const { name, email } = this.state;
    const { setUser, history } = this.props;
    setUser(name, email);
    history.push("/user");
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <label htmlFor="name">Nome: </label>
        <input type="text" id="name" onChange={ (e) => this.setState({ name: e.target.value })}/>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" onChange={ (e) => this.setState({ email: e.target.value })}/>
        <button type="submit">Entrar</button>
        <Link to="/">preco</Link>
        <Link to="/user">Carteira</Link>
        <Link to="/buy">Comprar</Link>
      </form>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (name, email) => dispatch(setUserAction(name, email)),
});

export default connect(null, mapDispatchToProps)(Login);