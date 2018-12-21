import React, { Component, Fragment } from 'react'

class CreateTasklist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTasklist: {},
      // user: {
      //   id: 1,
      //   user_name: "AerosDawson",
      //   first_name: "Jack",
      //   last_name: "Yeung",
      //   city: "New York",
      //   state: "NY"
      // }
    }
  }


  updateNewTasklistInputs = (event) => {
    this.setState({
      ...this.state,
      newTasklist:
      {
        ...this.state.newTasklist,   // prevents overwriting other keys (if any) in the newTasklist state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleNewTasklistSubmit(this.state.newTasklist)
    this.props.history.push("/tasks")
  }


  render () {
    // console.log("renderprops", this.props)
    return (
      <Fragment>
        <br/>
        <h1>Create a New Tasklist</h1>
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={this.handleSubmit}
        >
          <div className="inline fields">
            <div className="eight wide field">
              <input
                id="list_title"
                type="text"
                name="list_title"
                placeholder="Tasklist Title"
                value={this.state.newTasklist.list_title}
                onChange={this.updateNewTasklistInputs}
              />
            </div>
            <button className="ui button" type="submit" value="Submit">
              Create Tasklist
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
  }

export default CreateTasklist
