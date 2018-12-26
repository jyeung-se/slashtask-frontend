import React, { Component, Fragment } from 'react';
import CarouselSlider from './CarouselSlider'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


class FrontPage extends Component {

  showCreateTasklistButton = () => {
    if (this.props.tasklists.length === 0) {
      return (
        // <b><Link to="/newtasklist">Create a Tasklist</Link></b>
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

  showViewTasksButton = () => {
    if (this.props.tasklists.length > 0) {
      return (
        // <b><Link to="/tasks">View my Tasks</Link></b>
        <a href="/tasks">
          <button className='ui animated button'>
            <div className='visible content'>View my Tasks</div>
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
          {/* <b><Link to="/tasks">View my Tasks</Link></b> */}
          {this.showViewTasksButton()}
          {/* <a href="/tasks">
            <button className='ui animated button'>
              <div className='visible content'>View my Tasks</div>
              <div className='hidden content'>
                <i aria-hidden='true' className='tasks icon' />
              </div>
            </button>
          </a> */}
          {/* {'   ||   '} */}
          {this.showCreateTasklistButton()}
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
