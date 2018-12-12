import { CREATE_TASKLIST, SET_CURRENT_TASKLIST } from '../actions/types'

const initialState = {
  tasklists: [],
  currentTasklist: null
}


const tasklistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASKLIST:
      return {
        ...state,
        tasklists: [...state.tasklists, action.tasklist]
        // users: [...state.tasklists, action.tasklist]
      }
    case SET_CURRENT_TASKLIST:
      return {
        ...state,
        currentTasklist: action.payload
      }
    default:
      return state
  }
}


export default tasklistsReducer
