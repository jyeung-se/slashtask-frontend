import { CREATE_USER, SET_CURRENT_USER, FAILED_LOGIN, LOG_OUT } from './types'
import store from '../store'


  export const createUser = (user) => {
    console.log(user);
    fetch(`http://localhost:3000/api/v1/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
          first_name: user.first_name,
          last_name: user.last_name,
          city: user.city,
          state: user.state
        }
      })
    // }).then(res => console.log("Created a new user."))
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(json => {
      localStorage.setItem('jwt', json.jwt)
      store.dispatch({type: SET_CURRENT_USER, user: json.user})
    })
    .catch(response => response.json().then(json => store.dispatch({type: FAILED_LOGIN, payload: json.errors})))
  }


  export const login = (user) => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password
        }
      })
    // }).then(res => console.log("You have logged in."))
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(json => {
      localStorage.setItem('jwt', json.jwt)
      store.dispatch({type: SET_CURRENT_USER, user: json.user})
    })
    .catch(response => response.json().then(json => store.dispatch({type: FAILED_LOGIN, payload: json.message})))
  }


  export const setCurrentUser = (userInfo) => ({
    type: SET_CURRENT_USER,
    payload: userInfo
  })


  export const fetchCurrentUser = () => {
    fetch("http://localhost:3000/api/v1/profile", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then((json) => store.dispatch(setCurrentUser(json.user)))
  }
