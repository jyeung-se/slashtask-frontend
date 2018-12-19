import { combineReducers } from 'redux'
import tasksReducer from './reducer_tasks'
import searchReducer from './reducer_searchs'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  search: searchReducer
})

export default rootReducer
