import { FETCH_TASKS, CREATE_TASK, EDIT_TASK, LIKE_TASK, SLASH_TASK, DELETE_TASK } from './types'
import store from '../store'

export const fetchTasks = (task) => {
  fetch(`http://localhost:3000/api/v1/tasks/`, {
    method: "GET",
    headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
  }).then(res => res.json())
  .then(tasks => store.dispatch({type: FETCH_TASKS, tasks: tasks}))
}
//   store.dispatch({
//     type: FETCH_TASKS,
//     payload: task
//   })
// }

export const createTask = (user_id, task) => {
  fetch(`http://localhost:3000/api/v1/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      "title": `${task.title}`,
      "description": `${task.description}`,
      "date_posted": `${task.created_at}`,
      "slashed": false,
      "likes": 0,
      "task_list_id": 1,
      "date_completed": `${task.date_completed}`,
      "user_id": `${user_id}`
    })
  // }).then(res => console.log("Created a new task."))
  }).then(res => res.json())
  .then(created_task => store.dispatch({type: CREATE_TASK, task: created_task}))
}

export const editTask = (task) => {
  fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "title": `${task.title}`,
      "description": `${task.description}`
    })
  // }).then(res => console.log("Updated the task."))
  }).then(res => res.json())
  .then(edited_task => store.dispatch({type: EDIT_TASK, task: edited_task}))
}

export const likeTask = (task) => {
  fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "likes": task.likes + 1
    })
  }).then(res => res.json())
  .then(liked_task => store.dispatch({type: LIKE_TASK, task: liked_task}))
}

export const slashTask = (task) => {
  fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "slashed": `${!task.slashed}`
    })
  // }).then(res => console.log("The selected task has been created in the slashedTaskList."))
  }).then(res => res.json())
  .then(slashed_task => store.dispatch({type: SLASH_TASK, task: slashed_task}))
}

export const deleteTask = (task) => {
  fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  // }).then(res => console.log("Deleted the task."))
  }).then(res => res.json())
  .then(deleted_task => store.dispatch({type: DELETE_TASK, task: deleted_task}))
}
