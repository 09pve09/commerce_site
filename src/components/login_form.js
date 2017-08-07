import React from 'react'
import { Field, reduxForm } from 'redux-form'


let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit } className='.form-inline text-center'>
      <div className="form-group">
        <label htmlFor="firstName">Username</label>
        <Field className='form-control ' name="login" component="input" type="text" />
      </div>
      <button className="btn btn-default" type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;
