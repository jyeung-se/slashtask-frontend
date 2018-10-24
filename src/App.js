import React, { Component } from 'react';
import './App.css';
import TaskContainer from './containers/TaskContainer.js'
// import ImgSlider from './components/ImgSlider.js'
import CarouselSlider from './components/CarouselSlider.js'

class App extends Component {
  render() {
    return (

      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <header className="App-header">
            <font size="7">SlashTask</font>
          <br/>
            <h1>Slash Off One Task at a Time</h1>
          </header>
        </div>
          {/* <ImgSlider /> */}
          <CarouselSlider />
          <TaskContainer />
       </div>
    )
  }
}

export default App;
