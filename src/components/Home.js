import React, { Component } from 'react'
import styled from 'styled-components'

class Home extends Component {
  render () {
    const { courses } = this.props
    console.log(courses)
    const list = courses.map(
      t => (
        <CourseCard key={t.id}>
          <img alt='poster' src={t.poster} />
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
