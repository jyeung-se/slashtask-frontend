import React, { Component, Fragment } from 'react'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      existingUser: {
        user_name: '',
        password: ''
      }
    }
  }


  updateLoginInputs = (event) => {
    this.setState({
      ...this.state,
      existingUser:
      {
        ...this.state.user,   // prevents overwriting other keys (if any) in the currentTask state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    // }, ()=>console.log(this.state))
    })
  }


  handleUpdate = (event) => {
    event.preventDefault()
    this.props.handleLogin(this.props.user)
  }


  render() {
    return (
      <Fragment>
        <br/>
        <a href="/"><button className="ui button">Return to Front Page</button></a>
        <h1>Welcome back! Please login below.</h1>
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={this.handleUpdate}
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

export default LoginPage
