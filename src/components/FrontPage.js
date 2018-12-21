import React, { Component, Fragment } from 'react';
import CarouselSlider from './CarouselSlider'

class FrontPage extends Component {


  render() {
    return (
      <Fragment>
        <a href="/signup">
          <button className='ui animated button'>
            <div className='visible content'>Sign Up</div>
            <div className='hidden content'>
              <i aria-hidden='true' className='edit icon' />
            </div>
          </button>
        </a>
        {"  | |  "}
        <a href="/login">
          <button className='ui animated button'>
            <div className='visible content'>Login</div>
            <div className='hidden content'>
              <i aria-hidden='true' className='user icon' />
            </div>
          </button>
        </a>
        <div className="ui raised segment">
          <div className="ui center aligned segment violet inverted">
            <header className="App-header">
              <font size="7">Welcome to slashTask</font>
            <br/>
              <h1>Slash Off One Task at a Time</h1>
            </header>
          </div>
          <a href="/tasks">
            <button className='ui animated button'>
              <div className='visible content'>View my Tasks</div>
              <div className='hidden content'>
                <i aria-hidden='true' className='tasks icon' />
              </div>
            </button>
          </a>
          {"  | |  "}
          <a href="/newtasklist">
            <button className='ui animated button'>
              <div className='visible content'>Create a Tasklist</div>
              <div className='hidden content'>
                <i aria-hidden='true' className='tasks icon' />
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
