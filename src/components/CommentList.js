import React, { Component } from 'react'
import styled from 'styled-components'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const list = comments.map(
      t => (
        <div key={t.id}>
          {t.user} -- {t.body}
        </div>
      )
    )
    return (
      <Wrap>
        {list}
      </Wrap>
    )
  }
}

export default CommentList

const Wrap = styled.div``
