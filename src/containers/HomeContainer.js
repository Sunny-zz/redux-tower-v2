import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { like, goComment } from '../actions'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state =>({
  courses: state.courses
})
// mapDispatchToProps 的简写形式
export default connect(mapStateToProps, {
  like,
  goComment
})(HomeContainer)
