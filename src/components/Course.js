import React, { Component } from 'react'
import styled from 'styled-components'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class Course extends Component {
  render () {
    const { commentsByCourseId, deleteCmt, match, addComment } = this.props
    const { id } = match.params
    const comments = commentsByCourseId[id] || []
    return (
      <Wrap>
        <Upper>
          Upper
        </Upper>
        <Lower>
          <CommentWrap>
            <CommentForm id={id} addComment={addComment} />
            <CommentList comments={comments} deleteCmt={deleteCmt} />
          </CommentWrap>
        </Lower>
      </Wrap>
    )
  }
}

export default Course

const Wrap = styled.div`
`

const Upper = styled.div`
  min-height: 30vh;
  background: #00bcd4;
`

const Lower = styled.div`
  min-height: 60vh;
  background-color: #eeeeee;
  padding-top: 20px;
`

const CommentWrap = styled.div`
  background: #fff;
  min-height: 10vh;
  width: 600px;
  margin: 0 auto;
`
