import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import groups from './groups'

const pgwebminApp = combineReducers({
  groups,
  todos,
  visibilityFilter
})

export default pgwebminApp
