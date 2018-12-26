import React, { Fragment } from 'react'
import CarouselSlider from './CarouselSlider'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


const FrontPage = (props) => {

  const showCreateTasklistButton = () => {
    if (props.tasklists.length === 0) {
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

  const showViewTasksButton = () => {
    if (props.tasklists.length > 0) {
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
          {showViewTasksButton()}
          {/* <a href="/tasks">
            <button className='ui animated button'>
              <div className='visible content'>View my Tasks</div>
              <div className='hidden content'>
                <i aria-hidden='true' className='tasks icon' />
              </div>
            </button>
          </a> */}
          {/* {'   ||   '} */}
          {showCreateTasklistButton()}
          <br/>
          <br/>
          <CarouselSlider />
        </div>
      </Fragment>
    )

}


function mapStateToProps(state) {
  return {
    tasklists: state.tasklists.tasklists
  }
}

export default connect(mapStateToProps)(FrontPage)
