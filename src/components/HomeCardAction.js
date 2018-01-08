import React, { Component } from 'react'
import styled from 'styled-components'

class HomeCardAction extends Component {
  
  render () {
    const { likes } = this.props
    return (
      <Wrap>
        <Button>
          {likes} 赞
        </Button>
        <Button>
          2 评论
        </Button>
      </Wrap>
    )
  }
}

export default HomeCardAction

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  background-color: rgb(242, 244, 246);
  color: rgb(76, 87, 101);
  height: 36px;
  :hover {
    cursor: pointer;
  }
  line-height: 36px;
`
