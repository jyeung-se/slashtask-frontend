import React, { Component } from 'react'
import { editTask, deleteTask, slashTask } from '../actions/task_actions'
import Task from '../components/Task'
import { connect } from 'react-redux'
import EditForm from '../components/EditForm'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'


class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state={
      currentTask: null,
      users: [],
      user: {
        id: 1,
        user_name: "AerosDawson",
        first_name: "Jack",
        last_name: "Yeung",
        city: "New York",
        state: "NY",
      },
      searchInput: ''
    }
  }


  handleEditTask = (task) => {
    this.setState({
      currentTask: task
    // }, () => console.log("currentTask is", this.state.currentTask))
    })
  }


  handleEditSubmit = (task) => {
    this.setState({
      currentTask: null
    })
    this.handlePatch(task)
  }


  handlePatch = (task) => {
    editTask(task)
  }


  handleSlashTask = (task) => {
    slashTask(task)
  }


  handleDeleteTask = (task) => {
    deleteTask(task)
  }


  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      searchInput: event.target.value
    })
  }


  mappedTasks = () => {
    console.log('non-slashed tasks: ', this.props.tasks.filter((task) => task.slashed === false))
    console.log('non-slashed && filtered tasks: ', this.props.tasks.filter((task) => task.slashed === false && task.title.toLowerCase().includes(this.props.searchInput)))

    return this.props.tasks.filter((task) => task.slashed === false &&
      (task.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.description.toLowerCase().includes(this.state.searchInput.toLowerCase())))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    // .sort to sort by newest task created instead of ID by default
    .map((task) => <Task task={task}
    key={task.id}
    handleEditTask={this.handleEditTask}
    handleSlashTask={this.handleSlashTask}
    handleDeleteTask={this.handleDeleteTask} />
    )
  }

  render () {
    console.log("TaskList props", this.props)

    if (this.props.tasklists === []) {
      alert('Please create a tasklist first.')
      return <Link to={'/newtasklist'} />
    } else {
      return (
        <div>
          <a href="/"><button className="ui button left">Back to Frontpage</button></a>
          <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tasks={this.props.tasks} />
          {this.state.currentTask === null ? null : <EditForm tasks={this.state.tasks}
          currentTask={this.state.currentTask}
          updateExistingTaskInputs={this.updateExistingTaskInputs}
          handleEditSubmit={this.handleEditSubmit}
           />}
          <br/>
          <a href="/newtask"><button className="ui button left">Create a new task</button></a>
          {"  ~    ~  "}
          <a href="/slashed_tasks"><button className="ui button left">View Slashed Tasks</button></a>

          <table className="ui celled striped padded table">
            <tbody>
              <tr>
                <th>
                  <h3 className="ui center aligned header">Task Title</h3>
                </th>
                <th>
                  <h3 className="ui center aligned header">Task Description</h3>
                </th>
                <th>
                  <h3 className="ui center aligned header">Date Posted</h3>
                </th>
                <th>
                  <h3 className="ui center aligned header">Update Task</h3>
                </th>
                <th>
                  <h3 className="ui center aligned header">Slash Task</h3>
                </th>
                <th>
                  <h3 className="ui center aligned header">Delete Task</h3>
                </th>
              </tr>

              {this.mappedTasks()}
            </tbody>
          </table>
        </div>
      )
    }
  }
}


function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    tasklists: state.tasklists.tasklists
  }
}

export default connect(mapStateToProps)(TaskList)
