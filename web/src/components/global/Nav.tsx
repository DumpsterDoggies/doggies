import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Nav = ({ display, onClick }) => {
  const links = [
    { to: '/about', name: 'About' },
    { to: '/volunteer', name: 'Volunteer' },
    { to: '/adopt', name: 'Adopt' },
    { to: '/sponsor', name: 'Sponsor a Doggie' },
    { to: '/spenden', name: 'Spenden' },
    // { to: '/blog', name: 'Blog' },
    { to: '/contact', name: 'Contact' },
  ]

  return (
    <Container display={display}>
      {links.map((item, index) => (
        <AniLinkS paintDrip hex="166879" duration={0.5} to={item.to} onClick={onClick} key={index}>
          {item.name}
        </AniLinkS>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: ${props => (props.display ? 'grid' : 'none')};
  grid-auto-flow: column;
  justify-content: end;
  gap: 24px;
  padding-bottom: 8px;

  @media screen and (max-width: 767px) {
    z-index: 900;
    background-color: var(--color-tertiarySolid);
    padding: 5vh 5vw;
    grid-auto-flow: row;
    position: absolute;
    top: 104px;
    backdrop-filter: blur(20px);
    justify-content: center;
    justify-items: center;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: grid;
  }
`

const AniLinkS = styled(AniLink)`
  text-align: center;
  padding: var(--borderRadius) 0.25rem;
  width: fit-content;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 0 0 inset var(--color-primary60);
  transition: 300ms ease box-shadow;
  &:hover {
    box-shadow: 0 -0.25rem 0 inset var(--color-primary60);
  }
  @media screen and (max-width: 767px) {
    padding: 0.5rem 1rem;
  }
`

export default Nav
