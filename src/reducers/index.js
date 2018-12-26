import { combineReducers } from 'redux'
import usersReducer from './reducer_users'
import tasklistsReducer from './reducer_tasklists'
import tasksReducer from './reducer_tasks'

const rootReducer = combineReducers({
  users: usersReducer,
  tasklists: tasklistsReducer,
  tasks: tasksReducer
})

export default rootReducer
