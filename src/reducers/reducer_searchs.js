import { UPDATE_SEARCH } from '../actions/types'

const initialState = {
  searchInput: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        searchInput: action.payload
      }

    default:
      return state
  }
}


export default searchReducer
