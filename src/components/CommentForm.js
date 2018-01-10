import React, { Component } from 'react'
import styled from 'styled-components'

class CommentForm extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    console.log('handleClick---', this.state.text)
    this.setState({
      text: ''
    })
  }
  
  render () {
    const { text } = this.state
    return (
      <Wrap>
        <input value={text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          评论
        </button>
      </Wrap>
    )
  }
}

export default CommentForm

const Wrap = styled.div``
