const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING'
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'

export function login(user_name, password) {
  return dispatch => {
    dispatch(setLoginPending(true))
    dispatch(setLoginSuccess(false))
    dispatch(setLoginError(null))

    callLoginApi(user_name, password, error => {
      dispatch(setLoginPending(false))
      if (!error) {
        dispatch(setLoginSuccess(true))
      } else {
        dispatch(setLoginError(error))
      }
    })
  }
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  }
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  }
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(user_name, password, callback) {
  setTimeout(() => {
    if (user_name === 'admin' && password === 'admin') {
      return callback(console.log("hello, it's me."))
    } else {
      return callback(new Error('Invalid user_name and password'))
    }
  }, 1000)
}

export default function userReducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      })

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      })

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      })

    default:
      return state
  }
}
