import React from 'react'
import Course from '../components/Course'
import { connect } from 'react-redux'
import { deleteCmt, addComment } from '../actions'
import { getCommentsByCourseId } from '../selectors'

const CourseContainer = props => <Course {...props} />

const mapStateToProps = state => ({
  commentsByCourseId: getCommentsByCourseId(state)
})

export default connect(mapStateToProps, {
  deleteCmt,
  addComment
})(CourseContainer)
