import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        city: '',
        state: ''
      },
      tasklist: {
        list_title: 'My Task List',
        user_id: null
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
  console.log('this.props are:', this.props);
    if (this.props.user) {
      return <Redirect to={'/tasks'} />
    } else {
      return (
        <Fragment>
          <br/>
          <a href="/"><button className="ui button">Return to Front Page</button></a>
          <h1>Welcome! Please register for SlashTask below.</h1>
          <h4 className="ui dividing header">Sign Up Form Information</h4>
          <form
            className="ui form"
            onSubmit={this.handleSubmit}
          >
            <div className="field">
              <label>Login Information</label>
              <div className="two fields">
                <div className="three wide field">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={this.state.newUser.username}
                    onChange={this.updateSignUpInputs}
                  />
                </div>
                <div className="three wide field">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.newUser.password}
                    onChange={this.updateSignUpInputs}
                  />
                </div>
              </div>
              <label>Profile Information</label>
              <div className="four fields">
                <div className="three wide field">
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.newUser.first_name}
                    onChange={this.updateSignUpInputs}
                  />
                </div>
                <div className="three wide field">
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.newUser.last_name}
                    onChange={this.updateSignUpInputs}
                  />
                </div>
                <div className="three wide field">
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={this.state.newUser.city}
                    onChange={this.updateSignUpInputs}
                  />
                </div>
                <div className="one wide field">
                  <input
                    id="state"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={this.state.newUser.state}
                    onChange={this.updateSignUpInputs}
                  />
                </div>
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
  }

  const mapStateToProps = ({ users: { logged_in } }) => {
    return {
      logged_in
    }
  }

export default connect(mapStateToProps)(SignUpPage)
