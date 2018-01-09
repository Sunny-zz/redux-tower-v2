import { combineReducers } from 'redux'
import courses from './courses'
import comments from './comments'

export default combineReducers({
  comments,
  courses
})
