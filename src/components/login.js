import React, { Component } from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';


class LoginWindow extends Component {


  render() {
    return (
      <LoginForm />
    )
  }
}
const mapStateToProps = function(state) {
  return {
   form: state.form
  };
}

export default connect(mapStateToProps)(LoginWindow);
