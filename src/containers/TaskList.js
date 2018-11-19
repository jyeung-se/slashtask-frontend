import React, { Component } from 'react'
import Task from '../components/Task.js'
import { connect } from 'react-redux'
import { dispatchNewTask } from '../actions/index.js'
import { bindActionCreators } from 'redux'


class TaskList extends Component {

  mappedTasks = () => {
    console.log(this.props.tasks);
    return this.props.tasks.map((task) => <Task task={task}
      key={task.id}
      handleEditTask={this.props.handleEditTask}
      handleSlashTask={this.props.handleSlashTask}
      handleDeleteTask={this.props.handleDeleteTask} />
    )
  }

  render () {
    console.log("TaskList props", this.props)
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
    tasks: state.tasks
  }
}

  // Anything returned from this function will end up as props in the TaskList container
function mapDispatchToProps(dispatch) {
  // Whenever selectTask is called, the result should be passed to all of our reducers
  return bindActionCreators({ dispatchNewTask: dispatchNewTask}, dispatch)
}

// Promote TaskList from a component to a container - it needs to know about this new
// dispatch method, selectTask. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
// export default TaskList
