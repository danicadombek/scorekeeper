import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyle>{children}</HeaderStyle>
}

const HeaderStyle = styled.header`
  background-color: green;
  padding: 20px;
  color: snow;
  text-align: center;
  width: auto;

  h1 {
    font-size: 20px;
  }
`
