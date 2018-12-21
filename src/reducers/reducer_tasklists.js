import { CREATE_TASKLIST } from '../actions/types'

const initialState = {
  tasklists: []
}

const tasklistsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_TASKS:
    //   return {
    //     ...state,
    //     tasks: action.payload
    //   }

    case CREATE_TASKLIST:
      return {
        ...state,
        tasklists: [...state.tasklists, action.tasklist]
      }

    default:
      return state
  }
}


export default tasklistsReducer
