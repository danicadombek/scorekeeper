import React from 'react'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <Navi>
      <button>Play</button>
      <button>History</button>
    </Navi>
  )
}

const Navi = styled.nav`
  background-color: rebeccapurple;
`
