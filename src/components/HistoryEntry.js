import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

HistoryEntry.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <PlayHistory>
      <h2>{nameOfGame}</h2>
      <ul>
        {players.map(player => (
          <section key={player.name}>
            <span>{player.name}</span>
            <span>{player.score}</span>
          </section>
        ))}
      </ul>
    </PlayHistory>
  )
}

const PlayHistory = styled.section`
  background-color: sandybrown;
  padding: 20px;

  h2 {
    font-size: 20px;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
  }
`
