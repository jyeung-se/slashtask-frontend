import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: {
        "username": '',
        "password": '',
        "first_name": 'Nax',
        "last_name": 'Nelson',
        "city": 'New York City',
        "state": 'NY'
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


  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.createUser && this.props.createTasklist) {
      this.props.createUser(this.state.newUser)
      // this.props.createTasklist(this.state.tasklist)
      this.props.history.push("/tasks")
    }
    // to prevent breaking if register with an error
  }


  render() {
    return (
      <Fragment>
        <br/>
        <Link to="/"><button className="ui button">Return to Front Page</button></Link>
        <h1>Welcome! Please register for slashTask below.</h1>
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={this.handleSubmit}
        >
          <div className="inline fields">
            <div className="eight wide field">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="User Name"
                value={this.state.newUser.username}
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
          </form>
        </Fragment>
      )
    }
    }
  }

  const mapStateToProps = ({ users: { logged_in } }) => {
    return {
      logged_in
    }
  }

export default connect(mapStateToProps)(SignUpPage)
