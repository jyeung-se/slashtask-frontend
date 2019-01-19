import React, {Component} from 'react'

const Task = props => {
  // console.log("Tasks props", props)

  return (
    <tr>
      <td>{props.task.title}</td>
      <td>{props.task.description}</td>
      <td><center>{props.task.created_at.split("T")[0]}</center></td>
      <td>
      <center><button className="ui button" onClick={() => props.handleLikeTask(props.task)}>{props.task.likes}</button></center>
      </td>
      <td>
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
