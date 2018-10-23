import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskContainer from './containers/TaskContainer.js'

class App extends Component {
  render() {
    return (

      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <header className="App-header">
            <font size="7">Welcome To SlashTask</font>
          <br/>
            <h1>Slash Off One Task at a Time</h1>
          </header>
        </div>
          <TaskContainer />
       </div>
    )
  }
}

export default App;
