import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderTop from './HeaderTop'
import Nav from './Nav'
import Logo from '../../assets/Logo'

import { Menu, X } from 'react-feather'
import { Link } from 'gatsby'

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false)

  const handleClick = value => {
    setDisplayNav(value === true || value == false ? value : !displayNav)
  }

  return (
    <Container>
      <HeaderTop />
      <Bottom>
        <LogoS to="/" onClick={() => handleClick(false)}>
          <Logo />
        </LogoS>
        <Nav display={displayNav ? 1 : 0} onClick={handleClick} />
        <NavButton onClick={handleClick}>
          {displayNav ? <X /> : <Menu />}
        </NavButton>
      </Bottom>
    </Container>
  )
}

const Container = styled.header`
  display: grid;
  border-bottom: 1px solid var(--color-tertiaryBg20);
  backdrop-filter: blur(20px);
  z-index: 1000;
  position: relative;
  width: 100%;
`

const NavButton = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 16px 5vw 24px;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: end;
  }
`

const LogoS = styled(Link)`
  display: grid;
  width: 100%;
`

export default Header
