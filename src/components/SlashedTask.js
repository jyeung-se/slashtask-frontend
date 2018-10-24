import React from 'react'

const SlashedTask = props => {
  // console.log("SlashedTask props", props)

  return (
    <tr>
      <td>{props.task.title}</td>
      <td>{props.task.description}</td>
      <td>{props.task.created_at}</td>   {/* this is actually the created_at of the date slashed */}
    </tr>
  )
}

export default SlashedTask
