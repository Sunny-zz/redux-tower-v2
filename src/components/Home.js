import React, { Component } from 'react'
import store from '../store'

class Home extends Component {
  render () {
    console.log('store', store.getState())
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home
