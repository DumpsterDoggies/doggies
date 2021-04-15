import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import Container from '../components/Container'
import Button, { ButtonIcon } from '../components/ui/Button'
import Paypal from '../assets/icons/Paypal'
import Patreon from '../assets/icons/Patreon'
import Letter from '../components/Letter'
import BlockContent from '../components/block-content'
import FullImage from '../components/ui/FullImage'

const Spenden = (props) => {
  console.log(props);
  const letter = props.data.sanityPage._rawContent[2]
  const image = props.data.sanityPage.content[1]
  const threeBlock = props.data.sanityPage._rawContent[0]
  
  return (
    <Container>
      <SEO title="Spenden" />
      <Cards>
        <Card>
          <h5>{threeBlock.blockOne.heading}</h5>
          <BlockContent blocks={threeBlock.blockOne.body} />
          <ButtonIcon href={threeBlock.blockOne.button.url}>
            <Paypal />
            {threeBlock.blockOne.button.linkText}
          </ButtonIcon>
        </Card>
        <Card className="switch">
          <h5>{threeBlock.blockThree.heading}</h5>
          <BlockContent blocks={threeBlock.blockThree.body} />
          <ButtonIcon href={threeBlock.blockThree.button.url}>
          <Patreon />
            {threeBlock.blockThree.button.linkText}
          </ButtonIcon>
        </Card>
        <CardS>
          <h5>{threeBlock.blockTwo.heading}</h5>
          <BlockContent blocks={threeBlock.blockTwo.body} />
          <Button href={threeBlock.blockTwo.button.url}>
            {threeBlock.blockTwo.button.linkText}
          </Button>
        </CardS>
      </Cards>
      <FullImage src={image.image.asset.url} alt={image.image.alt} />
      <Letter>
        {letter.body.map(item => {
          return(
            <p key={item._key}>{item.children[0].text}</p>
          )
        })}
      </Letter>
    </Container>
  )
}

const Card = styled.div`
  display: grid;
  gap: 1rem;
  background: var(--color-white);
  padding: 2rem 1rem;
  align-content: start;
  justify-items: center;
  border-radius: var(--borderRadius);
`

const CardS = styled(Card)`
  box-shadow: 3px 3px 8px var(--color-tertiaryBg20);
  strong {
    font-weight: 600;
  }

  order: 3;
  @media screen and (min-width: 414px) {
    grid-column: span 2;
  }
  @media screen and (min-width: 768px) {
    order: 2;
    grid-column: initial;
  }
`

const Cards = styled.div`
  display: grid;
  gap: 2rem;

  .switch {
    order: 2;
  }
  @media screen and (min-width: 414px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1.5fr 1fr;
    .switch {
      order: 3;
    }
  }
`




export const query = graphql`
query{
  sanityPage(name: {eq: "Spenden"}) {
    _rawContent
    id
    content {
      ... on SanitySpendenImage {
        _key
        _type
        image {
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

export default Spenden
