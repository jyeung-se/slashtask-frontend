import React, { Component } from 'react'
import Task from '../components/Task'
import { connect } from 'react-redux'
import EditForm from '../components/EditForm'
import SearchBar from '../components/SearchBar'
import { updateSearch } from '../actions/search_actions'



class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state={
      searchInput: ''
    }
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
      handleEditTask={this.props.handleEditTask}
      handleSlashTask={this.props.handleSlashTask}
      handleDeleteTask={this.props.handleDeleteTask} />
      )
  }

  render () {
    console.log("TaskList props", this.props)

    return (
      <div>
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tasks={this.props.tasks} />
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

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps)(TaskList)
