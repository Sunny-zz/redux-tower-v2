import React from 'react'
import Course from '../components/Course'
import { connect } from 'react-redux'
import { deleteCmt } from '../actions'

const CourseContainer = props => <Course {...props} />

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, {
  deleteCmt
})(CourseContainer)
