
import store from '../store'

export const dispatchAllTasks = (task) => {
  store.dispatch({
    type: 'SHOW_ALL_TASKS',
    payload: task
  })
}

export const dispatchNewTask = (user_id, task) => {
  fetch(`http://localhost:3000/api/v1/tasks/`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "title": `${task.title}`,
      "description": `${task.description}`,
      "date_posted": `${task.created_at}`,
      "slashed": `${task.slashed}`,
      "task_list_id": 1,
      "date_completed": `${task.date_completed}`,
      "user_id": `${user_id}`
    })
  // }).then(res => console.log("Created a new task."))
}).then(res => res.json())
.then(created_task => store.dispatch({type: 'CREATE_TASK',task:created_task}))
}

export const dispatchSlashTask = (task) => {
  store.dispatch({
    type: 'SLASH_TASK',
    payload: task
  })
}

export const dispatchDeleteTask = (task) => {
  store.dispatch({
    type: 'DELETE_TASK',
    payload: task
  })
}
