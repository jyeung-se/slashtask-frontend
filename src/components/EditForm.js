import React, { Component, Fragment } from 'react'

// const EditForm = (props) => {
class EditForm extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      // tasks: this.props.tasks,
      currentTask: this.props.currentTask
    }
  }


  updateExistingTaskInputs = (event) => {
    this.setState({
      ...this.state,
      currentTask:
      {
        ...this.state.currentTask,   // prevents overwriting other keys (if any) in the currentTask state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    // }, ()=>console.log(this.state))
    })
  }


  // handleEditSubmit = (event) => {
  //   this.setState(prevState => ({
  //     tasks: prevState.tasks.map(
  //       task => (task.id === this.state.currentTask.id ? Object.assign(task, this.state.currentTask) : task)
  //     )
  //   }))
  //   event.preventDefault()
  //   this.handlePatch()
  // }
  //
  //
  // handlePatch = () => {
  //   fetch(`https://slashtask.herokuapp.com/api/v1/tasks/${this.state.currentTask.id}`, {
  //     method: "PATCH",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       "title": `${this.state.currentTask.title}`,
  //       "body": `${this.state.currentTask.body}`
  //     })
  //   }).then(res => console.log("Updated the task."))
  // }


  handleUpdate = (event) => {
    event.preventDefault()
    this.props.handleEditSubmit(this.state.currentTask)
    // this.props.history.push("/")
  }


  render() {
    // console.log('edit form props', this.props)
    // console.log('edit form state', this.state)
    return (
      <Fragment>
        <h1>Update this Task</h1>
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={this.handleUpdate}
        >
          <div className="inline fields">
            <div className="eight wide field">
              <textarea
                id="title"
                type="text"
                name="title"
                placeholder="Task Title"
                value={this.state.currentTask.title}
                onChange={this.updateExistingTaskInputs}
              />
            </div>
            <div className="eight wide field">
              <textarea
                id="description"
                type="text"
                name="description"
                placeholder="Task Description"
                value={this.state.currentTask.description}
                onChange={this.updateExistingTaskInputs}
              />
            </div>
            <button className="ui button" type="submit" value="Submit">
              Update Task
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
  }

export default EditForm
