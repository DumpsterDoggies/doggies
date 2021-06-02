import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderTop = ({ footer }:any) => (
  <Container footer={footer}>
    <Left footer={footer}>
      <Anchor
        href="https://www.patreon.com/dumpsterdoggies"
        target="_blank"
        rel="noopener"
      >
        Patreon
      </Anchor>
      <Anchor
        href="https://www.youtube.com/channel/UCULAkdwbtCKa3FOPxbxQ71w/videos"
        target="_blank"
        rel="noopener"
      >
        Youtube
      </Anchor>
      <Anchor
        href="https://www.instagram.com/sbht_lovesdogs_/"
        target="_blank"
        rel="noopener"
      >
        Instagram
      </Anchor>
      <Anchor
        href="https://www.facebook.com/dumpsterdoggies/"
        target="_blank"
        rel="noopener"
      >
        Facebook
      </Anchor>
    </Left>
    <Right footer={footer}>
      <AnchorLink paintDrip hex="166879" duration={0.5} to="/sponsor" >
        Donate
      </AnchorLink>
    </Right>
  </Container>
)

const Container = styled.div`
  display: ${props => (props.footer ? 'grid' : 'none')};
  grid-auto-flow: column;
  padding: 8px 5vw;
  justify-content: space-between;
  background-color: var(--color-tertiaryBg20);
  justify-content: ${props => (props.footer ? 'end' : 'space-between')};
  width: 100%;
  @media screen and (min-width: 768px) {
    display: grid;
  }
`

const Anchor = styled.a`
  font-weight: ${props => (props.footer ? '600' : 'inherit')};
  letter-spacing: 0.025rem;
  font-size: 0.75rem;
  box-shadow: 0 0 0 inset ${props => (props.footer ? `var(--color-primary60)`: `var(--color-white)`)};
  transition: 300ms ease box-shadow;
  &:hover {
    box-shadow: 0 -0.15rem 0 inset ${props => (props.footer ? `var(--color-primary60)`: `var(--color-white)`)};
  }
  `

const AnchorLink = styled(AniLink)`
  font-weight: ${props => (props.footer ? '600' : 'inherit')};
  letter-spacing: 0.025rem;
  font-size: 0.75rem;
  box-shadow: 0 0 0 inset ${props => (props.footer ? `var(--color-primary60)`: `var(--color-white)`)};
  transition: 300ms ease box-shadow;
  &:hover {
    box-shadow: 0 -0.15rem 0 inset ${props => (props.footer ? `var(--color-primary60)`: `var(--color-white)`)};
  }
`

const Left = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
  justify-content: ${props => (props.footer ? 'end' : 'start')};
 
`

const Right = styled.div`
  display: grid;
  display: ${props => (props.footer ? 'none' : 'grid')};
`

export default HeaderTop
