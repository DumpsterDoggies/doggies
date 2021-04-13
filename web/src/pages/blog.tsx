import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import PostsListing from '../components/post/PostsListing'
import SEO from '../components/SEO'

const Blog = ({ data }) => {
  console.log(data)
  const { nodes } = data.allContentfulBlogPost
  const { description } = data?.allSite?.nodes[0]?.siteMetadata

  return (
    <Container nodeLength={nodes.length}>
      <SEO title="Blog" description={description} />
      {nodes.map((node, index) => (
        <PostsListing node={node} key={index} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 4rem 2rem;
  gap: 1rem;

  a:first-child {
    grid-column: span 3;
  }
`

export const query = graphql`
  query {
    allSanityPost {
    edges {
      node {
        slug {
          current
        }
        publishedAt
        body {
          _rawChildren
          children {
            text
            marks
          }
        }
        title
        mainImage {
          alt
          asset {
            url
          }
        }
      }
    }
  }
  }
`

export default Blog
