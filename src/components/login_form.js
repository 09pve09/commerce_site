import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { LoginUser } from '../actions';

class LoginForm extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.LoginUser(values);
    // console.log('DDGGDGDGD');
    // browserHistory.push('/ads')
    // console.log('OLOLOL');
  }

  render() {
    const { handleSubmit } = this.props;
    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Login"
          name="login"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.login) {
    errors.login = "Enter a login!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'LoginNewForm'
})(
  connect(null, { LoginUser })(LoginForm)
);
