import { CREATE_TASKLIST } from './types'
import store from '../store'


  export const createTasklist = (this.props.current_user, tasklist) => {
    console.log(tasklist);
    fetch(`http://localhost:3000/api/v1/task_lists/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        list_title: "My Task List",
        tasks: [],
        user: null
      })
    // }).then(res => console.log("Created a new tasklist."))
    }).then(res => res.json())
    .then(created_tasklist => store.dispatch({type: CREATE_USER, tasklist: created_tasklist}))
  }
