import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Navigation.propTypes = {
  activePlay: PropTypes.bool,
  activeHistory: PropTypes.bool,
  isActive: PropTypes.bool,
}

export default function Navigation({ isActive }) {
  return (
    <Navi>
      <button isActive>Play</button>
      <button>History</button>
    </Navi>
  )
}

const Navi = styled.nav`
  background-color: goldenrod;
  display: flex;
  justify-content: space-around;

  button {
    background: ${props => (props.isActive ? 'grey' : 'steelblue')};
    border: none;
    border-radius: 4px;
    padding: 10px;
    color: snow;
    width: 100px;

    &:hover {
      background: darkblue;
    }
  }
`
