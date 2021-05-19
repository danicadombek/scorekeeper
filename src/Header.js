import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  header: PropTypes.string,
}

export default function Header({ header }) {
  return (
    <HeaderStyle>
      <h1>{header}</h1>
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
