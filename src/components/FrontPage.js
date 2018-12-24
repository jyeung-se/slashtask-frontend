import React, { Component, Fragment } from 'react';
import CarouselSlider from './CarouselSlider'
import { connect } from 'react-redux'


class FrontPage extends Component {

  componentDidMount() {
    //this is to show/hide the 'Create Tasklist' button
    //based on if the user already made one.
    //In componentDidMount in order to prevent split second
    //flash of the button upon initial load/refresh
    if (this.props.tasklists !== []) {
      return (
        <a href="/newtasklist">
          <button className='ui animated button'>
            <div className='visible content'>Create a Tasklist</div>
            <div className='hidden content'>
              <i aria-hidden='true' className='tasks icon' />
            </div>
          </button>
        </a>
      )
    }
  }

  render() {
    console.log('front page props are: ', this.props)

    return (
      <Fragment>
        {/* SignUp and Login buttons hidden for noAuth version */}
        {/* <a href="/signup">
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
        </a> */}
        <div className="ui raised segment">
          <div className="ui center aligned segment violet inverted">
            <header className="App-header">
              <font size="7">Welcome to SlashTask</font>
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
          {/* <a href="/newtasklist">
            <button className='ui animated button'>
              <div className='visible content'>Create a Tasklist</div>
              <div className='hidden content'>
                <i aria-hidden='true' className='tasks icon' />
              </div>
            </button>
          </a> */}
          <br/>
          <br/>
          <CarouselSlider />
        </div>
      </Fragment>
    )
  }
}


function mapStateToProps(state) {
  return {
    tasklists: state.tasklists.tasklists
  }
}

export default connect(mapStateToProps)(FrontPage)
