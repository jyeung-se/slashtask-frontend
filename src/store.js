import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import { browserHistory, routerMiddleware, push, routerReducer } from 'react-router-redux'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory))))
// const store = createStore(combineReducers({
//   ...rootReducer,
//   routing: routerReducer
// }),
// composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory))))

export default store
