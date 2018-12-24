import { FETCH_TASKLISTS, CREATE_TASKLIST } from '../actions/types'

const initialState = {
  tasklists: []
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

    default:
      return state
  }
}


export default tasklistsReducer
