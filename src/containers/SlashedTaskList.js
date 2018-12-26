import React, { Component } from 'react'
import SlashedTask from '../components/SlashedTask'
import { slashTask } from '../actions/task_actions'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import SlashedTaskCounter from '../components/SlashedTaskCounter'
import ClockTime from '../components/ClockTime'


class SlashedTaskList extends Component {
  constructor(props) {
    super(props)

    this.state={
      searchInput: ''
    }
  }


  handleSlashTask = (task) => {
    slashTask(task)
  }


  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      searchInput: event.target.value
    })
  }


  mappedSlashedTasks = () => {
    // this.props.slashedTasks here are already filtered
    // for only slashed tasks (true) via filter()
    // in the mapStateToProps() at the very bottom
    return this.props.tasks.filter((task) => task.slashed === true &&
      (task.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.description.toLowerCase().includes(this.state.searchInput.toLowerCase())))
    .sort((a, b) => a.updated_at- b.updated_at)
    .map((task, index) => <SlashedTask
      task={task}
      key={index}
      handleSlashTask={this.handleSlashTask} />
    )
  }

  render() {
    console.log("SlashedTaskList props are", this.props)

    if (this.props.tasklists === []) {
      alert('Please create a tasklist first.')
      return <Link to={'/newtasklist'} />
    } else {
      return (
        <div>
          <a href="/tasks"><button className="ui button left">Back to my Task List</button></a>
          <br/>
          <br/>
          <br/>
          <b>The current time and date is: </b><b style={{ color: 'blue' }}><ClockTime /></b>
          <SlashedTaskCounter tasks={this.state.tasks} />
          <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tasks={this.props.tasks} />

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
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside TaskList
  return {
    tasks: state.tasks.tasks,
    tasklists: state.tasklists.tasklists
  }
}

export default connect(mapStateToProps)(SlashedTaskList)
