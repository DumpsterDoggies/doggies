import React from 'react'
import styled from 'styled-components'

import PostDetails from './PostDetails'
import { Link } from 'gatsby'

const PostsListing = ({ node }: any) => {
  return (
    <Link to={`/blog/${node.slug}`}>
      <Card>
        <Img bg={node.heroImage.gatsbyImageData.src} />
        <h5>{node.title}</h5>
        <p>{node.description.description}</p>
        <PostDetails
          date={node.publishDate}
          timeToRead={node.body.childMarkdownRemark.timeToRead}
        />
      </Card>
    </Link>
  )
}

const Card = styled.div`
  display: grid;
  padding: 2rem;
  gap: 2rem;
  align-content: start;
  height: 100%;
  background-color: var(--color-white);
`

const Img = styled.div`
  display: grid;
  background: url(${props => props.bg});
  background-position: center center;
  background-size: cover;

  height: 300px;
`

export default PostsListing
