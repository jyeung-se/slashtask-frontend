import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'

const withAuth = (WrappedComponent) => {

  class AuthorizedComponent extends React.Component {

    componentDidMount() {
      // need to check if there is a jwt and NOT logged in
      // then it will login by fetching current user based on jwt
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        // debugger
        return <WrappedComponent />
      } else {
        return <Redirect to={
          '/login'
        }
      />
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.users.loggedIn,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // fetchCurrentUser: () => console.log('hello')
      fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()), //dispatch is automagically provided by redux
    }
  }


  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default withAuth
