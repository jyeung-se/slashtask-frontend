import React from 'react'
import SlashedTask from './Task'


const SlashedTaskList = props => {
  // console.log("SlashedTaskList props", props)
  const mappedSlashedTasks = props.slashedTasks.map((task, index) => <SlashedTask task={task} key={index} handleSlashTask={props.handleSlashTask} />)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Task Title</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Task Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date Slashed</h3>
          </th>
        </tr>

        {mappedSlashedTasks}
      </tbody>
    </table>
  )
}


export default SlashedTaskList
