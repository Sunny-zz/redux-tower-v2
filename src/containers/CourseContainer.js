import React from 'react'
import Course from '../components/Course'
import { connect } from 'react-redux'

const CourseContainer = props => <Course {...props} />

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CourseContainer)
