import React, { Component } from 'react'
import styled from 'styled-components'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const list = comments.map(
      t => (
        <Comment key={t.id}>
          <User>
            {t.user}:
          </User>
          <Body>
            {t.body}
          </Body>
          <Action>
            删除
          </Action>
        </Comment>
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

const Wrap = styled.div`
  * {
    padding: 10px;
  }
`

const Comment = styled.div`
  display: flex;
`

const User = styled.div`
  font-weight: 600;
`

const Body = styled.div`
  flex-grow: 1;
`

const Action = styled.div`
  
`
