import React, { Component } from 'react'
import styled from 'styled-components'
import Card from 'material-ui/Card'
import CardAction from './CardAction'

class Home extends Component {
  render() {
    const { courses, like, goComment, commentsByCourseId } = this.props
    console.log(courses)
    const list = courses.map(t => (
      <CourseCard key={t.id}>
        <img alt="poster" src={t.poster} />
        <CardAction
          likes={t.likes}
          like={like}
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
