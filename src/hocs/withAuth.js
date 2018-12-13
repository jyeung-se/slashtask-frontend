import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'

const withAuth = (WrappedComponent) => {

  class AuthorizedComponent extends React.Component {

    // componentDidMount() {
    //   if (localStorage.getItem('jwt') && this.props.loggedIn === true) this.props.fetchCurrentUser()
    // }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
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
      loggedIn: state.users.loggedIn
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCurrentUser: () => console.log('hello')
      // fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()), //dispatch is automagically provided by redux
    }
  }


  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default withAuth
