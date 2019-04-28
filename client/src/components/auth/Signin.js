import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { signin } from '../../actions'

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature')
    })
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
        <div>{this.props.errorMessage}</div>
        <button>Signin</button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  errorMessage: auth.errorMessage
})

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: 'signin' })
)(Signin) 
