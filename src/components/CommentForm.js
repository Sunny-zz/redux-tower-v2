import React, { Component } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'

class CommentForm extends Component {
  state = {
    text: '',
    user: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  handleUserChange = e => {
    e.preventDefault()
    this.setState({
      user: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    const { text, user } = this.state
    const id = shortid()
    const comment = {
      body: text,
      id,
      user,
      course: this.props.id
    }
    this.props.addComment(comment)
    this.setState({
      text: '',
      user: ''
    })
  }
  
  render () {
    const { text, user } = this.state
    return (
      <Wrap>
        <input value={user} onChange={this.handleUserChange} />
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
