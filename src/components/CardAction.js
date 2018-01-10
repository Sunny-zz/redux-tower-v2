import React, { Component } from 'react'
import styled from 'styled-components'
import ThumbUp from 'material-ui-icons/ThumbUp'
import Comment from 'material-ui-icons/Comment'

class HomeCardAction extends Component {
  handleClick = id => {
    this.props.like(id)
    setTimeout(
      () => {
        this.props.hideHeart(id)
      }
      , 1000
    )
  }
  
  render() {
    const { likes, goComment, id, comments } = this.props
    return (
      <Wrap>
        <Button onClick={() => this.handleClick(id)}>
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
  justify-content: space-between
`

const Button = styled.div`
  display: flex;
  background-color: rgb(242, 244, 246);
  color: rgb(76, 87, 101);
  padding: 2px 9px;
  :hover {
    cursor: pointer;
  }
  line-height: 26px; // 16+5*2
  svg {
    fill: #212121;
    width: 16px;
    height: 16px;
    margin: 5px;
    margin-left: 0;
  }
`
