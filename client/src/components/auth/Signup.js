import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends Component {
  onSubmit = (formProps) => {

  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field 
            name="email"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
          />
        </fieldset>
        <button>Signup</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'signup' })(Signup)
