import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Button = props => {
  return props.href ? (
    <a href={props.href} target="_blank" rel="nofollow">
      <Container {...props}>{props.children}</Container>
    </a>
  ) : (
    <Container {...props}>{props.children}</Container>
  )
}

export const ButtonAni = ({ children, to }) => (
  <ContainerAni to={to}>{children}</ContainerAni>
)

export const ButtonIcon = props => {
  return props.href ? (
    <a href={props.href} target="_blank" rel="nofollow">
      <ContainerIcon {...props}>
        {props.icon} {props.children}
      </ContainerIcon>
    </a>
  ) : (
    <ContainerIcon {...props}>
      {props.icon} {props.children}
    </ContainerIcon>
  )
}

const Container = styled.button`
  display: grid;
  padding: 1rem 3rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  width: fit-content;
  font-weight: 700;
  font-family: var(--font-header);
  letter-spacing: var(--borderRadius);
  transition: 0.55s ease;
  &:hover {
    box-shadow: 1px var(--borderRadius) 6px
      var(--color-primary80);
  }

  @media screen and (max-width: 768px) {
    box-shadow: 1px var(--borderRadius) 10px
      var(--color-primary40);
  }

  &:focus,
  &:active {
    color: var(--color-white);
  }
`
const ContainerIcon = styled(Container)`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-items: center;
`

const ContainerAni = styled(Link)`
  display: grid;
  padding: 1rem 3rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  width: fit-content;
  font-weight: 700;
  font-family: var(--font-header);
  letter-spacing: var(--borderRadius);
  transition: 0.55s ease;
  &:hover {
    box-shadow: 1px var(--borderRadius) 6px
      var(--color-primary80);
  }

  @media screen and (max-width: 768px) {
    box-shadow: 1px var(--borderRadius) 10px
      var(--color-primary40);
  }

  &:focus,
  &:active {
    color: var(--color-white);
  }
`

export default Button
