import React from 'react'
import { connect } from 'react-redux'


const TaskCounter = props => {
  console.log("TaskCounter props", props)

  return (
    <h2 style={{ color: 'green' }}>You have <span style={{ color: 'red' }}>{props.tasks.filter((task) => task.slashed === false).length}</span> tasks to slash off!</h2>
  )
}


const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps)(TaskCounter)
