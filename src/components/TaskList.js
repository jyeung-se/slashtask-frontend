import React from 'react'
import Task from './Task'


const TaskList = props => {
  // console.log("TaskList props", props)
  const mappedTasks = props.tasks.map((task, index) => <Task task={task} key={index} handleEditTask={props.handleEditTask} handleSlashTask={props.handleSlashTask} handleDeleteTask={props.handleDeleteTask} />)

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
            <h3 className="ui center aligned header">Date Posted</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Update Task</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Slash Task</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete Task</h3>
          </th>
        </tr>

        {mappedTasks}
      </tbody>
    </table>
  )
}


export default TaskList
