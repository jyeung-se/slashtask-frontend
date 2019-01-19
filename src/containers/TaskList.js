import React, { Component } from 'react'
import { editTask, deleteTask, slashTask, fetchTasks, likeTask } from '../actions/task_actions'
import Task from '../components/Task'
import { connect } from 'react-redux'
import EditForm from '../components/EditForm'
import SearchBar from '../components/SearchBar'
import TaskCounter from '../components/TaskCounter'
import ClockTime from '../components/ClockTime'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state={
      currentTask: null,
      // users: [],
      // user: {
      //   id: 1,
      //   username: "AerosDawson",
      //   first_name: "Jack",
      //   last_name: "Yeung",
      //   city: "New York",
      //   state: "NY",
      // },
      searchInput: '',
      likeCounter: 0
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tasks')
    .then(res => res.json())
    .then(task => fetchTasks(task))
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


  handleLikeTask = (task) => {
    likeTask(task)
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
    // console.log('non-slashed tasks: ', this.props.tasks.filter((task) => task.slashed === false))
    // console.log('non-slashed && filtered tasks: ', this.props.tasks.filter((task) => task.slashed === false && task.title.toLowerCase().includes(this.props.searchInput)))

    return this.props.tasks.filter((task) => task.slashed === false &&
      (task.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.description.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.created_at.split("T")[0].includes(this.state.searchInput)))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    // .sort to sort by newest task created instead of ID by default
    .map((task) => <Task task={task}
    key={task.id}
    handleEditTask={this.handleEditTask}
    handleLikeTask={this.handleLikeTask}
    handleSlashTask={this.handleSlashTask}
    handleDeleteTask={this.handleDeleteTask}
    likeCounter={this.state.likeCounter} />
    )
  }

  render () {
    // console.log("TaskList props are: ", this.props)

    return (
      <div>
        <Link to="/"><button className="ui button left">Back to Frontpage</button></Link>
        <br/>
        <br/>
        <br/>
        <b>The current time and date is: </b><b style={{ color: 'blue' }}><ClockTime /></b>
        <TaskCounter tasks={this.state.tasks} />
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tasks={this.props.tasks} />
        {this.state.currentTask === null ? null : <EditForm tasks={this.state.tasks}
        currentTask={this.state.currentTask}
        updateExistingTaskInputs={this.updateExistingTaskInputs}
        handleEditSubmit={this.handleEditSubmit}
         />}
        <br/>
        <Link to="/newtask"><button className="ui button left">Create a new task</button></Link>
        {"  ~    ~  "}
        <Link to="/slashed_tasks"><button className="ui button left">View Slashed Tasks</button></Link>

        <Table color="teal" inverted className="ui celled striped padded table">
          <Table.Body>
            <Table.Row>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Task Title</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Task Description</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Date Posted</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
              <h3 className="ui center aligned header">Likes</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Update Task</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Slash Task</h3>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h3 className="ui center aligned header">Delete Task</h3>
              </Table.HeaderCell>
            </Table.Row>

            {this.mappedTasks()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    tasklists: state.tasklists.tasklists
  }
}
// }


export default withAuth(connect(mapStateToProps)(TaskList))
