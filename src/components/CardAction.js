import React, { Component } from 'react'
import styled from 'styled-components'
import ThumbUp from 'material-ui-icons/ThumbUp'
import Comment from 'material-ui-icons/Comment'

class HomeCardAction extends Component {
  render() {
    const { likes, like, goComment, id, comments } = this.props
    return (
      <Wrap>
        <Button onClick={() => like(id)}>
          <ThumbUp />
          {likes}
        </Button>
        <Button onClick={() => goComment(id)}>
          <Comment />
          {comments.length}
        </Button>
      </Wrap>
    )
  }
}

export default HomeCardAction

const Wrap = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  svg {
    fill: #212121;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`

const Button = styled.div`
  background-color: rgb(242, 244, 246);
  color: rgb(76, 87, 101);
  height: 36px;
  padding: 2px 9px;
  :hover {
    cursor: pointer;
  }
  line-height: 36px;
`
