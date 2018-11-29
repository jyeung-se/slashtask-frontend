import React, { Component, Fragment } from 'react'

class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: {
        user_name: '',
        password: ''
      }
    }
  }


  updateSignUpInputs = (event) => {
    this.setState({
      ...this.state,
      newUser:
      {
        ...this.state.newUser,   // prevents overwriting other keys (if any) in the newUser state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    // }, ()=>console.log(this.state))
    })
  }


  handleUpdate = (event) => {
    event.preventDefault()
    this.props.handleSignUp(this.props.user)
  }


  render() {
    return (
      <Fragment>
        <br/>
        <a href="/"><button className="ui button">Return to Front Page</button></a>
        <h1>Welcome! Please register for SlashTask below.</h1>
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
                value={this.state.newUser.user_name}
                onChange={this.updateSignUpInputs}
              />
            </div>
            <div className="eight wide field">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.newUser.password}
                onChange={this.updateSignUpInputs}
              />
            </div>
            <button className="ui button" type="submit" value="Submit">
              Register
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
  }

export default SignUpPage
