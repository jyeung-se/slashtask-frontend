import React, { Component } from 'react';
import './App.css';
// import ImgSlider from './components/ImgSlider.js'
// import CarouselSlider from './components/CarouselSlider.js'
import FrontPage from './components/FrontPage'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import EditForm from './components/EditForm'
import CreateForm from './components/CreateForm'
import TaskList from './containers/TaskList'
import SlashedTaskList from './containers/SlashedTaskList'
import SearchBar from './components/SearchBar'
import { updateSearch } from './actions/search_actions'
import { fetchTasks, createTask, editTask, deleteTask, slashTask } from './actions/task_actions'
import { createUser } from './actions/user_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)

    this.state={

      tasks: [],
      currentTask: null,
      slashedTasks: [],
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


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tasks')
    .then(res => res.json())
    .then(task => fetchTasks(task))
  }


  updateSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    updateSearch(this.state.searchInput)
  }


  handleNewTaskSubmit = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
    this.handleCreate(task)
  }


  handleCreate = (task) => {
    createTask(this.state.user.id, task)
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


  render(props) {
    // console.log('this.state.tasks are: ', this.state.tasks)
    // console.log('props are: ', this.props)
    console.log('searchInput is: ', this.state.searchInput)

    const frontPage =
      <div>
        <FrontPage user={this.props.user} />
      </div>

    const signUpPage =
      <div>
        <SignUpPage user={this.props.user} registerUser={createUser} />
      </div>

    const loginPage =
      <div>
        <LoginPage user={this.props.user} />
      </div>

    const taskList =
      <div>
        <SearchBar searchInput={this.state.searchInput} updateSearchInput={this.updateSearchInput} tasks={this.state.tasks} />
        {this.state.currentTask === null ? null : <EditForm tasks={this.state.tasks}
          currentTask={this.state.currentTask}
          updateExistingTaskInputs={this.updateExistingTaskInputs}
          handleEditSubmit={this.handleEditSubmit}
        />}
        <h2>Hi {this.state.user.first_name}, this is your up-to-date task list.</h2>
        <br/>
        <a href="/newtask"><button className="ui button left">Create a new task</button></a>
        {"  ~    ~  "}
        <a href="/slashed_tasks"><button className="ui button left">View Slashed Tasks</button></a>
        <TaskList tasks={this.state.tasks}
          handleEditTask={this.handleEditTask}
          handleSlashTask={this.handleSlashTask}
          handleDeleteTask={this.handleDeleteTask}
          searchInput={this.state.searchInput}
        />
      </div>

    const slashedTaskList =
      <div>
        <h2>Hi {this.state.user.first_name}, the following are your slashed tasks.</h2>
        <br/>
        <a href="/tasks"><button className="ui button left">Back to my Task List</button></a>
        <SlashedTaskList
          slashedTasks={this.state.tasks.filter((task) => task.slashed === true)}
          handleSlashTask={this.handleSlashTask}
        />
      </div>

    return (
      <Router>
        <div className="ui raised segment">
          <Route exact path="/" component={() => frontPage} />
          <Route exact path="/signup" component={() => signUpPage} />
          <Route exact path="/login" component={() => loginPage} />
          <Route exact path="/newtask" render={(renderprops) => <CreateForm handleNewTaskSubmit={this.handleNewTaskSubmit} {...renderprops} />} />
          <Route exact path="/tasks" component={() => taskList} />
          <Route exact path="/slashed_tasks" component={() => slashedTaskList} />
        </div>
      </Router>
    )
  }
}

export default App;
