import { FETCH_TASKLISTS, CREATE_TASKLIST, FAILED_TASKLIST } from '../actions/types'

const initialState = {
  tasklists: [],
  error: null
}

const tasklistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKLISTS:
      return {
        ...state,
        tasklists: action.payload
      }

    case CREATE_TASKLIST:
      return {
        ...state,
        tasklists: [...state.tasklists, action.tasklist]
      }

    // case FAILED_TASKLIST:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   }

    default:
      return state
  }
}


export default tasklistsReducer
