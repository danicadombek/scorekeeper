import React from 'react'

import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

Navigation.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}
export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <Navi>
      {pages.map(({ title, id }) => (
        <Button
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title}
        </Button>
      ))}
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
