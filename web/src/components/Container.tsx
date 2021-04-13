import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  padding: calc(2*var(--paddingH)) var(--paddingW);
  gap: var(--pageGap);
  justify-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: var(--paddingW);
  }
`

export default Container
