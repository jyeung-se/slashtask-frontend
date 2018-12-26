import React, { Component } from 'react'
import SlashedTask from '../components/SlashedTask'
import { slashTask } from '../actions/task_actions'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import SlashedTaskCounter from '../components/SlashedTaskCounter'
import ClockTime from '../components/ClockTime'
import { Table } from 'semantic-ui-react'


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
      (task.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.description.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.updated_at.split("T")[0].includes(this.state.searchInput)))
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    // .sort to sort by most recent slashed task instead of ID by default
    .map((task, index) => <SlashedTask
      task={task}
      key={index}
      handleSlashTask={this.handleSlashTask} />
    )
  }

  render() {
    console.log("SlashedTaskList props are", this.props)

    return (
      <div>
        <a href="/tasks"><button className="ui button left">Back to my Task List</button></a>
        <br/>
        <br/>
        <br/>
        <b>The current time and date is: </b><b style={{ color: 'blue' }}><ClockTime /></b>
        <SlashedTaskCounter tasks={this.state.tasks} />
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tasks={this.props.tasks} />

        <Table color="green" inverted className="ui celled striped padded table">
          <Table.Body>
            <Table.Row>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Task Title</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Task Description</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Date Slashed</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Unslash Task</h3>
              </Table.HeaderCell>
            </Table.Row>

            {this.mappedSlashedTasks()}
          </Table.Body>
        </Table>
      </div>
    )
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
