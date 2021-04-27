import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockText from './block-text'

const Volunteers = ({ data }) => {

  return (
    <Container>
      <h3>Our Crew</h3>
      <Content>
        {data?.edges.map((edge) => (
          <Card key={edge.node.id}>
            <ImgS src={edge.node.image.asset.url} alt={edge.node.image.alt} />
            <TitleContainer> 
              <Title>{edge.node.name}</Title>
              <City>{edge.node.location}</City>
            </TitleContainer>
            <BlockText blocks={edge.node._rawBio} />
          </Card>
        ))}
      </Content>
    </Container>
  )
}

const Body = styled.p`
  display: grid;
`

const City = styled.h6`
  display: grid;
`

const Title = styled.h5`
  display: grid;
`

const ImgS = styled.img`
  display: grid;
  border-radius: var(--borderRadius);
`

const TitleContainer = styled.div`
  display: grid;
  gap: 0rem;
`

const Card = styled.div`
  display: grid;
  gap: 1rem;
  align-items: start;
  align-content: start;
`

const Content = styled.div`
  display: grid;
  gap: 3rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`

const Container = styled.div`
  display: grid;
  gap: 3rem;
`

export default Volunteers
