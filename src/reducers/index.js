import { combineReducers } from 'redux'
import tasksReducer from './reducer_tasks'

const rootReducer = combineReducers({
  tasks: tasksReducer
})

export default rootReducer
