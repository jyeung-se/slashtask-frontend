import { CREATE_TASKLIST } from '../actions/types'

const initialState = {
  tasklists: []
}


const tasklistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASKLIST:
      return {
        ...state,
        users: [...state.tasklists, action.tasklist]
      }

    default:
      return state
  }
}


export default tasklistsReducer
