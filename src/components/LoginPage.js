import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/reducer_users'

// import { userActions } from '../actions/user_actions'


class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      existingUser: {
        user_name: '',
        password: '',
        logged_in: false
      }
    }
  }


  updateLoginInputs = (event) => {
    this.setState({
      ...this.state,
      existingUser:
      {
        ...this.state.existingUser,   // prevents overwriting other keys (if any) in the existingUser state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    // }, ()=>console.log(this.state))
    })
  }


  handleLogin = (event) => {
    event.preventDefault()

    this.props.login(this.state.existingUser.user_name, this.state.existingUser.password);
    console.log(this.state);
    // debugger
    this.setState({
      existingUser: {
        user_name: this.state.existingUser.user_name,
        password: this.state.existingUser.password,
        logged_in: true
      }
    })
    // debugger
  }


  render() {
    console.log("state is", this.state)

    return (
      <Fragment>
        <br/>
        <a href="/"><button className="ui button">Return to Front Page</button></a>
        <h1>Welcome back! Please login below.</h1>
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={this.handleLogin}
        >
          <div className="inline fields">
            <div className="eight wide field">
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="User Name"
                value={this.state.existingUser.user_name}
                onChange={this.updateLoginInputs}
              />
            </div>
            <div className="eight wide field">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.existingUser.password}
                onChange={this.updateLoginInputs}
              />
            </div>
            <button className="ui button" type="submit" value="Submit">
              Login
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
}

  const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user_name, password) => dispatch(login(user_name, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

// export default LoginPage
