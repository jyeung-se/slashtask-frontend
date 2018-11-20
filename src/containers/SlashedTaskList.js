import React, { Component } from 'react'
import SlashedTask from '../components/SlashedTask.js'
import { connect } from 'react-redux'
import { dispatchNewTask } from '../actions/index.js'
import { bindActionCreators } from 'redux'


class SlashedTaskList extends Component {

  mappedSlashedTasks = () => {
    return this.props.slashedTasks.map((task, index) => <SlashedTask
      task={task}
      key={index}
      handleSlashTask={this.props.handleSlashTask} />
    )
  }

  render() {
    console.log("SlashedTaskList props are", this.props)

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
              <h3 className="ui center aligned header">Date Slashed</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">UnSlash Task</h3>
            </th>
          </tr>

          {this.mappedSlashedTasks()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside TaskList
  return {
    slashedTasks: state.tasks.filter((task) => task.slashed === true)
  }
}

  // Anything returned from this function will end up as props in the TaskList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatchNewTask: dispatchNewTask}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SlashedTaskList)

// export default SlashedTaskList
