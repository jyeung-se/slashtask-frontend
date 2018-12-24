import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/user_actions'


class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: {
        username: '',
        password: '',
        logged_in: false
      }
    }
  }


  updateLoginInputs = (event) => {
    this.setState({
      ...this.state,
      currentUser:
      {
        ...this.state.currentUser,   // prevents overwriting other keys (if any) in the currentUser state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    // }, ()=>console.log(this.state))
    })
  }


  handleLogin = (event) => {
    event.preventDefault()

    this.props.login(this.state.currentUser.username, this.state.currentUser.password);
    console.log(this.state);
    // debugger
    this.setState({
      currentUser: {
        username: this.state.currentUser.username,
        password: this.state.currentUser.password,
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
                id="username"
                type="text"
                name="username"
                placeholder="User Name"
                value={this.state.currentUser.username}
                onChange={this.updateLoginInputs}
              />
            </div>
            <div className="eight wide field">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.currentUser.password}
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
    currentUser: state.currentUser
    // currentUser: {
    //   username: state.currentUser.username,
    //   password: state.currentUser.password
    // }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

// export default LoginPage
