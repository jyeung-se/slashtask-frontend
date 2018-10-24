import React, { Component, Fragment } from 'react';
import CarouselSlider from './CarouselSlider'

class FrontPage extends Component {


  render() {
    return (
      <Fragment>
        <a href="/signup"><button className="ui button">Sign Up</button></a>
        {"  | |  "}
        <a href="/login"><button className="ui button">Login</button></a>

        <div className="ui raised segment">
          <div className="ui center aligned segment violet inverted">
            <header className="App-header">
              <font size="7">Welcome to SlashTask</font>
            <br/>
              <h1>Slash Off One Task at a Time</h1>
            </header>
          </div>
          <a href="/tasks"><button className="ui button">View my Tasks</button></a>
          <br/>
          <br/>
          <CarouselSlider />
        </div>
      </Fragment>
    )
  }
}

export default FrontPage
