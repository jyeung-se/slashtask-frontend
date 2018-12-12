import { CREATE_TASKLIST, SET_CURRENT_TASKLIST } from './types'
import store from '../store'
import { fetchCurrentUser } from './user_actions'


  export const createTasklist = (tasklist) => {
    console.log(tasklist);
    console.log(store.getState().users);
    fetch(`http://localhost:3000/api/v1/task_lists/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        list_title: tasklist.list_title,
        user_id: null,
        // TRY: GET FETCH the last created user
        // and plug in his/her user_id above
        // to associate tasklist to new user
      })
    // }).then(res => console.log("Created a new tasklist."))
    }).then(res => res.json())
    .then(created_tasklist => store.dispatch({type: CREATE_TASKLIST, tasklist: created_tasklist}))
    .then(selected_tasklist => store.dispatch({type: SET_CURRENT_TASKLIST, tasklist: selected_tasklist}))
  }
