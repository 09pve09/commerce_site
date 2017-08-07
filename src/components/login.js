import React, { Component } from 'react';
import LoginForm from './login_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';



class LoginWindow extends Component {
  submit = (value) => {
    // print the form values to the console
    console.log('form:',this);

  }
  render() {
    return (
      <LoginForm onSubmit={this.submit} />
    )
  }
}

const mapStateToProps = function(state) {
  return {
   form: state.form
  };
}

export default connect(mapStateToProps)(LoginWindow);
