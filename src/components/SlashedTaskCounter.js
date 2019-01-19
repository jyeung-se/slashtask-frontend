import React from 'react'
import { connect } from 'react-redux'


const SlashedTaskCounter = props => {
  // console.log("SlashedTaskCounter props", props)

  return (
    <h2 style={{ color: 'green' }}>You have slashed <span style={{ color: 'orange' }}>{props.tasks.filter((task) => task.slashed === true).length}</span> tasks!</h2>
  )
}


const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps)(SlashedTaskCounter)
