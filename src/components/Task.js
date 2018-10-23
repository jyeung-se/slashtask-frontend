import React from 'react'

const Task = props => {
  console.log("Tasks props", props)

  return (
    <tr>
      <td>{props.task.title}</td>
      <td>{props.task.description}</td>
      <td>{props.task.created_at}</td>
      <td>
        {/* <a href="/editTask"><button className="ui button left" onClick={() => props.handleEditTask(props.task)}>Edit</button></a> */}
        <center><button className="ui button" onClick={() => props.handleEditTask(props.task)}>Edit</button></center>
      </td>
      <td>
        <center><button className="ui button" onClick={() => props.handleSlashTask(props.task)}>Slash</button></center>
      </td>
      <td>
        <center><button className="ui button" onClick={() => props.handleDeleteTask(props.task)}>Delete</button></center>
      </td>
    </tr>
  )
}

export default Task
