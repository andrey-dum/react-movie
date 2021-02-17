import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

import * as authTypes from "./auth/actionTypes"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


// const updateCookieMiddleware = ({ dispatch, getState }) => next => action => {
//   if(action.type === authTypes.FETCH_AUTH_SUCCESS) {
//       cookies.set('session_id', session_id, {
//         path: "/",
//         maxAge: 3600
//     })
//   }
//   if(action.type === authTypes.LOGOUT) {

//   }
//   return next(action)
// }


export const store = createStore(
    rootReducer,
    composeEnhancers(
    applyMiddleware(
        thunk
)))