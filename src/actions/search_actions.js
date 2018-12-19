import { UPDATE_SEARCH } from './types'
import store from '../store'


export const updateSearch = (event) => {
  store.dispatch({
    type: UPDATE_SEARCH,
    payload: event
  })
}
