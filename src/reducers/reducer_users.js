// import

const initialState = {
  user: null,
  logged_in: false,
  failedLogin: false,
  error: null
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        logged_in: true
      }
    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: true,
        error: action.payload
      }
    case LOG_OUT:
      return state

    default:
      return state
  }
}


export default usersReducer
