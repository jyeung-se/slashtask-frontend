import React, { Component } from 'react';
import './App.css';
// import ImgSlider from './components/ImgSlider.js'
// import CarouselSlider from './components/CarouselSlider.js'
import FrontPage from './components/FrontPage'
import LoginPage from './components/LoginPage'
import EditForm from './components/EditForm'
import CreateForm from './components/CreateForm'
import TaskList from './containers/TaskList'
import SlashedTaskList from './components/SlashedTaskList'
import { dispatchAllTasks, dispatchNewTask, dispatchEditTask, dispatchDeleteTask } from './actions/index'

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)

    this.state={

      tasks: [],
      currentTask: null,
      slashedTasks: [],
      user: {
        id: 1,
        user_name: "AerosDawson",
        first_name: "Jack",
        last_name: "Yeung",
        city: "New York",
        state: "NY",
      }
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tasks')
    .then(res => res.json())
    .then(task => dispatchAllTasks(task))

    // fetch('http://localhost:3000/api/v1/slashed_tasks')
    // .then(res => res.json())
    // .then(slashedTasksData => this.setState({
    //   slashedTasks: slashedTasksData
    // }))
  }


  handleNewTaskSubmit = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
    this.handleCreate(task)
  }


  handleCreate = (task) => {
    dispatchNewTask(this.state.user.id, task)
  }

  handleEditTask = (task) => {
    this.setState({
      currentTask: task
    // }, () => console.log("currentTask is", this.state.currentTask))
    })
  }


  handleEditSubmit = (task) => {
    this.setState({
    // this.setState(prevState => ({
    //   tasks: prevState.tasks.map(
    //     singleTask => (singleTask.id === task.id ? Object.assign(singleTask, task) : singleTask)
    //   ),
      currentTask: null
    })
    this.handlePatch(task)
  }


  handlePatch = (task) => {
    // fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    //   method: "PATCH",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({
    //     "title": `${task.title}`,
    //     "description": `${task.description}`,
    //     "date_completed": `${task.date_completed}`
    //   })
    // }).then(res => console.log("Updated the task."))
    dispatchEditTask(task)
  }


  handleSlashTask = (task) => {
    fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(res => console.log("The selected task has been slashed."))
    fetch(`http://localhost:3000/api/v1/slashed_tasks/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "title": `${task.title}`,
        "description": `${task.description}`,
        "date_completed": `${task.created_at}`
      })
    }).then(res => console.log("The selecte task has been created in the slashedTaskList."))
    this.setState({
      slashedTasks: [...this.state.slashedTasks, task],
      tasks: this.state.tasks.filter(eachTask => eachTask.id !== task.id)
    })
  }


  handleDeleteTask = (task) => {
    // fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    //   method: "DELETE",
    //   headers: {"Content-Type": "application/json"}
    // }).then(res => console.log("Deleted the task."))
    // this.setState({
    //   tasks: this.state.tasks.filter(eachTask => eachTask.id !== task.id)
    // })
    dispatchDeleteTask(task)
  }


  render(props) {
    // console.log('this.state.tasks are: ', this.state.tasks)
  console.log('props are: ', this.props)

    const frontPage =
      <div>
        <FrontPage user={this.props.user} />
      </div>

    const loginPage =
      <div>
        <LoginPage user={this.props.user} />
      </div>

    const taskList =
      <div>
        {this.state.currentTask === null ? null : <EditForm tasks={this.state.tasks} currentTask={this.state.currentTask} updateExistingTaskInputs={this.updateExistingTaskInputs} handleEditSubmit={this.handleEditSubmit} />}
        <h2>Hi {this.state.user.first_name}, this is your up-to-date task list.</h2>
        <br/>
        <a href="/newtask"><button className="ui button left">Create a new task</button></a>
        {"  ~    ~  "}
        <a href="/slashed_tasks"><button className="ui button left">View Slashed Tasks</button></a>
        <TaskList tasks={this.state.tasks} handleEditTask={this.handleEditTask} handleSlashTask={this.handleSlashTask} handleDeleteTask={this.handleDeleteTask} />
      </div>

    const slashedTaskList =
      <div>
        <h2>Hi {this.state.user.first_name}, the following are your slashed tasks.</h2>
        <br/>
        <a href="/tasks"><button className="ui button left">Back to my Task List</button></a>
        <SlashedTaskList slashedTasks={this.state.slashedTasks} handleSlashTask={this.handleSlashTask} />
      </div>

    return (
      <Router>
        <div className="ui raised segment">
          <Route exact path="/" component={() => frontPage} />
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
