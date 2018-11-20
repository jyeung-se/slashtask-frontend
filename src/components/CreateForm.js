import React, { Component, Fragment } from 'react'
class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // tasks: this.props.tasks,
      newTask: {},
      user: {
        id: 1,
        user_name: "AerosDawson",
        first_name: "Jack",
        last_name: "Yeung",
        city: "New York",
        state: "NY"
      }
    }
  }


  updateNewTaskInputs = (event) => {
    this.setState({
      ...this.state,
      newTask:
      {
        ...this.state.newTask,   // prevents overwriting other keys (if any) in the newTask state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleNewTaskSubmit(this.state.newTask)
    this.props.history.push("/tasks")
  }


  render () {
    // console.log("renderprops", this.props)
    return (
      <Fragment>
        <br/>
        <a href="/"><button className="ui button left">Back to my Task List</button></a>
        <h1>Create a New Task</h1>
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={this.handleSubmit}
        >
          <div className="inline fields">
            <div className="eight wide field">
              <textarea
                id="title"
                type="text"
                name="title"
                placeholder="Task Title"
                value={this.state.newTask.title}
                onChange={this.updateNewTaskInputs}
              />
            </div>
            <div className="eight wide field">
              <textarea
                id="description"
                type="text"
                name="description"
                placeholder="Task Description"
                value={this.state.newTask.description}
                onChange={this.updateNewTaskInputs}
              />
            </div>
            <button className="ui button" type="submit" value="Submit">
              Create Task
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
  }

export default CreateForm
