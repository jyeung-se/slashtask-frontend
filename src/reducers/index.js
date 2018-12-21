import { combineReducers } from 'redux'
import tasksReducer from './reducer_tasks'
import tasklistsReducer from './reducer_tasklists'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  tasklists: tasklistsReducer
})

export default rootReducer
