import React from 'react'

const SlashedTask = props => {
  // console.log("SlashedTask props", props)

  return (
    <tr>
      <td>{props.task.title}</td>
      <td>{props.task.description}</td>
      <td><center><b>{props.task.likes}</b></center></td>
      <td><center>{props.task.updated_at.split("T")[0]}</center></td>
      {/* this is actually the created_at of the date slashed */}
      <td>
        <center><button className="ui button" onClick={() => props.handleSlashTask(props.task)}>UnSlash</button></center>
      </td>
    </tr>
  )
}

export default SlashedTask
