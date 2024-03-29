import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>📅 {props.date}</Date>
      <span>•</span>
      <ReadingTime>{`⏱️${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
