import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { signup } from '../../actions'

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps)
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

export default compose(
  connect(null, { signup }),
  reduxForm({ form: 'signup' })
)(Signup) 
