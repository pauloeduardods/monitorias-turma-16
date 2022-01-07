import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const { email, name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
