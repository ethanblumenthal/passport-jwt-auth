import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout" style={{ margin: '0 10px'}}>Signout</Link>
          <Link to="/feature" style={{ margin: '0 10px'}}>Feature</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/signup" style={{ margin: '0 10px'}}>Signup</Link>
          <Link to="/signin" style={{ margin: '0 10px'}}>Signin</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated
})

export default connect(mapStateToProps)(Header)
