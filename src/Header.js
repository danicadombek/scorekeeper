import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: green;
  padding: 20px;
  color: snow;
  text-align: center;

  h1 {
    font-size: 20px;
  }
`
