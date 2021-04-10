import React from 'react'
import styled from 'styled-components'
import HeaderTop from './HeaderTop'

const Footer = () => (
  <Container>
    <HeaderTop footer />
    <Bottom>
      <div>
        © Copyright {new Date().getFullYear()} Dumpster Doggies. All rights
        reserved.
      </div>
      <div>
        Build by{' '}
        <a href="https://www.artticfox.com" rel="noopenner" target="_blank">
          Arttic Fox
        </a>
        .
      </div>
    </Bottom>
  </Container>
)

const Container = styled.footer`
  display: grid;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 12px;
  a {
    color: var(--color-white);
  }
`

const Bottom = styled.div`
  display: grid;
  padding: 1rem 5vw;
  justify-content: end;
  text-align: right;
  gap: 8px;
`

export default Footer
