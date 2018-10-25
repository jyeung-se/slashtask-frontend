import React, { Component, Fragment } from 'react';
import CarouselSlider from './CarouselSlider'

class FrontPage extends Component {


  render() {
    return (
      <Fragment>
        <a href="/signup">
          <button class='ui animated button' role='button'>
            <div class='visible content'>Sign Up</div>
            <div class='hidden content'>
              <i aria-hidden='true' class='edit icon' />
            </div>
          </button>
        </a>
        {"  | |  "}
        <a href="/login">
          <button class='ui animated button' role='button'>
            <div class='visible content'>Login</div>
            <div class='hidden content'>
              <i aria-hidden='true' class='user icon' />
            </div>
          </button>
        </a>
        <div className="ui raised segment">
          <div className="ui center aligned segment violet inverted">
            <header className="App-header">
              <font size="7">Welcome to SlashTask</font>
            <br/>
              <h1>Slash Off One Task at a Time</h1>
            </header>
          </div>
          <a href="/tasks">
            <button class='ui animated button' role='button'>
              <div class='visible content'>View my Tasks</div>
              <div class='hidden content'>
                <i aria-hidden='true' class='tasks icon' />
              </div>
            </button>
          </a>
          <br/>
          <br/>
          <CarouselSlider />
        </div>
      </Fragment>
    )
  }
}

export default FrontPage
