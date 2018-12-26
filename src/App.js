import React, { Component } from 'react';
import './App.css';
// import ImgSlider from './components/ImgSlider.js'
// import CarouselSlider from './components/CarouselSlider.js'
import FrontPage from './components/FrontPage'
// import SignUpPage from './components/SignUpPage'
// import LoginPage from './components/LoginPage'
// import EditForm from './components/EditForm'
import CreateForm from './components/CreateForm'
import CreateTasklist from './components/CreateTasklist'
import { fetchTasklists, createTasklist } from './actions/tasklist_actions'
import { fetchTasks, createTask } from './actions/task_actions'
import TaskList from './containers/TaskList'
import SlashedTaskList from './containers/SlashedTaskList'
import { createUser } from './actions/user_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)

    this.state={

      tasks: [],
      tasklists: [],
      // slashedTasks: [],
      // users: [],
      user: {
        id: 1,
        username: "DefaultUser",
        first_name: "Admin_First",
        last_name: "Admin_Last",
        city: "NA",
        state: "NA",
      },
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/task_lists')
    .then(res => res.json())
    .then(tasklist => fetchTasklists(tasklist))

    fetch('http://localhost:3000/api/v1/tasks')
    .then(res => res.json())
    .then(task => fetchTasks(task))

    // if (this.props.users.length === 0) {
    //   createUser(this.state.user)
    // }
  }


  handleNewTasklistSubmit = (tasklist) => {
    this.setState({
      tasklists: [...this.state.tasklists, tasklist]
    })
    // createUser(this.state.user)
    createTasklist(tasklist)
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
    console.log('App.js props are: ', this.props)

    const frontPage =
      <div>
        <FrontPage user={this.props.user} />
      </div>

    // const signUpPage =
    //   <div>
    //     <SignUpPage user={this.props.user} registerUser={createUser} />
    //   </div>
    //
    // const loginPage =
    //   <div>
    //     <LoginPage user={this.props.user} />
    //   </div>


    return (
      <Router>
        <div className="ui raised segment">
          <Route exact path="/" component={() => frontPage} />
          {/* <Route exact path="/signup" component={() => signUpPage} /> */}
          {/* <Route exact path="/login" component={() => loginPage} /> */}
          <Route exact path="/newtasklist" render={(renderprops) => <CreateTasklist handleNewTasklistSubmit={this.handleNewTasklistSubmit} user={this.state.user} {...renderprops} />} />
          <Route exact path="/newtask" render={(renderprops) => <CreateForm handleNewTaskSubmit={this.handleNewTaskSubmit} {...renderprops} />} />
          <Route exact path="/tasks" component={TaskList} />
          <Route exact path="/slashed_tasks" component={SlashedTaskList} />
        </div>
      </Router>
    )
  }
}


function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(App)
// export default App;
