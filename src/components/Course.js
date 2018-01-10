import React, { Component } from 'react'
import styled from 'styled-components'

class Course extends Component {
  render () {
    return (
      <Wrap>
        <Upper>
          Upper
        </Upper>
        <Lower>
          Lower
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
`
