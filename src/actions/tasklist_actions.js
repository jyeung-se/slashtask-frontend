import { CREATE_TASKLIST } from './types'
import store from '../store'


  export const createTasklist = (user_id, tasklist) => {
    console.log(user_id)
    console.log(tasklist)
    fetch(`http://localhost:3000/api/v1/task_lists/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        list_title: tasklist.list_title,
        user_id: user_id
      })
    // }).then(res => console.log("Created a new tasklist."))
    }).then(res => res.json())
    .then(created_tasklist => store.dispatch({type: CREATE_TASKLIST, tasklist: created_tasklist}))
  }
