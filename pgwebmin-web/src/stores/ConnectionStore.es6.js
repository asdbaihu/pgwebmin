'use strict';


import { createStore } from 'redux'
const ACTION_TYPES = require('constants/ActionTypes');

/**
 * Manage the connection
 */
function connection(state = [
    {
      user: 'brad',
      password: 'password1$',
      database: 'brad',
      host: 'localhost',
      port: 5432
    }
    ], action) {
  switch (action.type) {
  case ACTION_TYPES.GET_CONNECTIONS:
    return state
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(connection)

// Log events on this store
store.subscribe(() =>
  console.log(store.getState())
)
