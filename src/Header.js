import React from 'react'
import styled from 'styled-components/macro'

export default function Header(headline) {
  return (
    <HeaderStyle>
      <h1>Scorekeeper</h1>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  background-color: green;
  padding: 20px;
  color: snow;
  text-align: center;

  h1 {
    font-size: 20px;
  }
`
