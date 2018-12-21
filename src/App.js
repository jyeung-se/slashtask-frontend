import React, { Component } from 'react';
import './App.css';
// import ImgSlider from './components/ImgSlider.js'
// import CarouselSlider from './components/CarouselSlider.js'
import FrontPage from './components/FrontPage'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import EditForm from './components/EditForm'
import CreateForm from './components/CreateForm'
import CreateTasklist from './components/CreateTasklist'
import { createTasklist } from './actions/tasklist_actions'
import { fetchTasks, createTask } from './actions/task_actions'
import TaskList from './containers/TaskList'
import SlashedTaskList from './containers/SlashedTaskList'
import { createUser } from './actions/user_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)

    this.state={

      tasks: [],
      tasklists: [],
      slashedTasks: [],
      // users: [],
      user: {
        id: 1,
        user_name: "AerosDawson",
        first_name: "Jack",
        last_name: "Yeung",
        city: "New York",
        state: "NY",
      },
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tasks')
    .then(res => res.json())
    .then(task => fetchTasks(task))
  }


  handleNewTasklistSubmit = (tasklist) => {
    this.setState({
      tasklists: [...this.state.tasklists, tasklist]
    })
    createTasklist(this.state.user.id, tasklist)
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


  render(props) {
    // console.log('this.state.tasks are: ', this.state.tasks)
    // console.log('props are: ', this.props)

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

    // const taskList =
    //   <div>
    //     <SearchBar searchInput={this.state.searchInput} updateSearchInput={this.updateSearchInput} tasks={this.state.tasks} />
    //     {this.state.currentTask === null ? null : <EditForm tasks={this.state.tasks}
    //       currentTask={this.state.currentTask}
    //       updateExistingTaskInputs={this.updateExistingTaskInputs}
    //       handleEditSubmit={this.handleEditSubmit}
    //     />}
    //     <h2>Hi {this.state.user.first_name}, this is your up-to-date task list.</h2>
    //     <br/>
    //     <a href="/newtask"><button className="ui button left">Create a new task</button></a>
    //     {"  ~    ~  "}
    //     <a href="/slashed_tasks"><button className="ui button left">View Slashed Tasks</button></a>
    //     <TaskList tasks={this.state.tasks}
    //       handleEditTask={this.handleEditTask}
    //       handleSlashTask={this.handleSlashTask}
    //       handleDeleteTask={this.handleDeleteTask}
    //       searchInput={this.state.searchInput}
    //     />
    //   </div>

    // const slashedTaskList =
    //   <div>
    //     <h2>Hi {this.state.user.first_name}, the following are your slashed tasks.</h2>
    //     <br/>
    //     <a href="/tasks"><button className="ui button left">Back to my Task List</button></a>
    //     <SlashedTaskList
    //       slashedTasks={this.state.tasks.filter((task) => task.slashed === true)}
    //       handleSlashTask={this.handleSlashTask}
    //     />
    //   </div>

    return (
      <Router>
        <div className="ui raised segment">
          <Route exact path="/" component={() => frontPage} />
          <Route exact path="/signup" component={() => signUpPage} />
          <Route exact path="/login" component={() => loginPage} />
          <Route exact path="/newtasklist" render={(renderprops) => <CreateTasklist handleNewTasklistSubmit={this.handleNewTasklistSubmit} {...renderprops} />} />
          <Route exact path="/newtask" render={(renderprops) => <CreateForm handleNewTaskSubmit={this.handleNewTaskSubmit} {...renderprops} />} />
          <Route exact path="/tasks" component={TaskList} />
          <Route exact path="/slashed_tasks" component={SlashedTaskList} />
        </div>
      </Router>
    )
  }
}

export default App;
