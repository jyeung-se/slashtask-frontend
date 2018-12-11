import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'

const withAuth = (WrappedComponent) => {

  class AuthorizedComponent extends React.Component {

    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.logged_in) this.props.fetchCurrentUser()
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.logged_in) {
        return <WrappedComponent />
      } else {
        return <Redirect to={
          'http://localhost:3001/login'
        }
      />
      }
    }
  }

  function mapStateToProps({ usersReducer: { logged_in } }) {
    return {
      logged_in,
    }
  }

  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default withAuth
