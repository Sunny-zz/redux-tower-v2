import React, { Component } from 'react'
import styled from 'styled-components'
import HomeCardAction from './HomeCardAction'

class Home extends Component {
  render () {
    const { courses, like } = this.props
    console.log(courses)
    const list = courses.map(
      t => (
        <CourseCard key={t.id}>
          <img alt='poster' src={t.poster} />
          <HomeCardAction likes={t.likes} like={like} />
        </CourseCard>
      )
    )
    return (
      <Wrap>
        {list}
      </Wrap>
    )
  }
}

export default Home

const Wrap = styled.div`
  display: flex;
  width: 700px;
  margin: 20px auto;
  justify-content: space-between;
`
const CourseCard = styled.div`
  width: 300px;
  img {
    width: 100%;
    display: block;
  }
`
