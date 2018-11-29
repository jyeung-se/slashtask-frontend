import React, { Component } from 'react'
import Task from '../components/Task.js'
import { connect } from 'react-redux'
import { dispatchNewTask } from '../actions/index.js'
import { bindActionCreators } from 'redux'


class TaskList extends Component {

  mappedTasks = () => {
    console.log('non-slashed tasks: ', this.props.tasks.filter((task) => task.slashed === false))

    return this.props.tasks.map((task) => <Task task={task}
      key={task.id}
      handleEditTask={this.props.handleEditTask}
      handleSlashTask={this.props.handleSlashTask}
      handleDeleteTask={this.props.handleDeleteTask} />
    )
  }

  render () {
    // console.log("TaskList props", this.props)
    return (
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
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside TaskList
  return {
    tasks: state.tasks.filter((task) => task.slashed === false)
  }
}

  // Anything returned from this function will end up as props in the TaskList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchNewTask: dispatchNewTask}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
