import { combineReducers } from 'redux'
import TasksReducer from './reducer_tasks'

const rootReducer = combineReducers({
  Tasks: TasksReducer
})

export default rootReducer
