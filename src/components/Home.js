import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'material-ui/Card'
import CardAction from './CardAction'

class Home extends Component {
  render() {
    const { courses, like, goComment, commentsByCourseId, hideHeart } = this.props
    console.log('courses', courses)
    const list = courses.map(t => (
      <CourseCard key={t.id}>
        <img alt="poster" src={t.poster} />
        {
          t.showHeart && <div>爱心</div>
        }
        <CardAction
          likes={t.likes}
          like={like}
          hideHeart={hideHeart}
          comments={commentsByCourseId[t.id] || []}
          goComment={goComment}
          id={t.id}
        />
      </CourseCard>
    ))
    return <Wrap>{list}</Wrap>
  }
}

export default Home

const Wrap = styled.div`
  display: flex;
  width: 700px;
  margin: 20px auto;
  justify-content: space-between;
`
const CourseCard = styled(Card)`
  width: 300px;
  img {
    width: 100%;
    display: block;
  }
`
