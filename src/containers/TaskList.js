import React, { Component } from 'react'
import Task from '../components/Task'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import EditForm from '../components/EditForm'

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({searchInput: e.target.value})
  }

  mappedTasks = () => {
    console.log('non-slashed tasks: ', this.props.tasks.filter((task) => task.slashed === false))
    console.log('non-slashed && filtered tasks: ', this.props.tasks.filter((task) => task.slashed === false && task.title.toLowerCase().includes(this.props.searchInput)))

    // filter the tasks to see if search input in title or description
    return this.props.tasks.filter(task => task.slashed === false && (task.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || task.description.toLowerCase().includes(this.state.searchInput.toLowerCase())))
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
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} tasks={this.state.tasks} />
        {/* commented out below so it won't break */}
        
        {/* {this.state.currentTask === null ? null : <EditForm tasks={this.state.tasks}
          currentTask={this.state.currentTask}
          updateExistingTaskInputs={this.updateExistingTaskInputs}
          handleEditSubmit={this.handleEditSubmit}
        />} */}
        {/* <h2>Hi {this.state.user.first_name}, this is your up-to-date task list.</h2> */}
        <br/>
        <a href="/newtask"><button className="ui button left">Create a new task</button></a>
        {"  ~    ~  "}
        <a href="/slashed_tasks"><button className="ui button left">View Slashed Tasks</button></a>

        {/* make the TaskList the container so delete below */}

        {/* <TaskList tasks={this.state.tasks}
          handleEditTask={this.handleEditTask}
          handleSlashTask={this.handleSlashTask}
          handleDeleteTask={this.handleDeleteTask}
          searchInput={this.state.searchInput}
        /> */}


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
  // Whatever is returned will show up as props inside TaskList
  return {
    // map all tasks to this container component and then filter above with mappedTasks
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps)(TaskList)
