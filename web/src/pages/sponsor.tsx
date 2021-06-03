import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import { ButtonAni, ButtonIcon } from '../components/ui/Button'
import Patreon from '../assets/icons/Patreon'
import Container from '../components/Container'
import Paypal from '../assets/icons/Paypal'
import FullImage from '../components/ui/FullImage'

const Sponsor = ({ data }) => {
  return (
    <Container>
      <SEO title="Sponsor a Doggie" />
      <Enterence>
        <h2>Sponsor A Doggie</h2>
        <p>
          We are grateful for any help we can get for the doggies. Your
          contribution matters.
        </p>
        <p>
        Please check out our Patreon for monthly support. We love Patreon as it allows us to plan for our expenses. In the past we went through a great deal of financial stress where we didn't know if we'll have enough food for the dogs. Patreon relieves a great deal of that stress. Thank you so much for that! Every bit counts.
        </p>
        <Buttons>
          <ButtonIcon href="https://www.patreon.com/dumpsterdoggies">
            <Patreon /> Support Us on Patreon
          </ButtonIcon>
          <ButtonIcon href="https://www.paypal.com/paypalme/dumpsterdoggies">
            <Paypal /> Support Us on Paypal
          </ButtonIcon>
        </Buttons>
      </Enterence>
      <Donation>
        <ButtonAni to="/spenden ">Spenden</ButtonAni>
      </Donation>
      <FullImage image={data?.threePups?.childImageSharp?.gatsbyImageData} alt="anoir-chafik-2_3c4dIFYFU-unsplash" height={40}/>
    </Container>
  )
}

const Enterence = styled.div`
  display: grid;
  gap: 2rem;
`

const Buttons = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
`

const Donation = styled.div`
  display: grid;
  justify-items: center;

  text-align: left;
  ul {
    padding: 2rem;
  }
  li {
    list-style: square;
  }
`

export const query = graphql`
  query {
    threePups: file(relativePath: { eq: "threePups.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Sponsor
