import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state =>({
  courses: state
})
export default connect(mapStateToProps)(HomeContainer)
