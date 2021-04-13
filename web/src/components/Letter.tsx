import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string;
  children?: any;
}

const Letter = ({ title, children }:Props) => {
  return (
    <Container>
      {title && <h3>{title}</h3>}
      <Context>{children}</Context>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  text-align: center;
`

const Context = styled.div`
  display: grid;
  justify-content: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-tertiaryBg20);
  padding: 2rem;
  text-align: left;
  gap: 1rem;
  width: inherit;
  justify-self: center;
  p,
  h5,
  h6 {
    text-align: start;
    max-width: var(--maxWidth);
  }
`

export default Letter
