import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

History.propTypes = {
  headline: PropTypes.string,
  gamer: PropTypes.string,
  result: PropTypes.number,
}

export default function History({ gamer, result, headline }) {
  return (
    <PlayHistory>
      <h2>{headline}</h2>
      <container>
        <div>{gamer}</div>
        <div> {result} </div>
      </container>
    </PlayHistory>
  )
}

const PlayHistory = styled.section`
  background-color: yellow;
  padding: 10px;

  h2 {
    font-size: 20px;
  }

  container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`