import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components/macro'
import HistoryEntry from '../components/HistoryEntry'

HistoryPage.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfGame: PropTypes.string,
      players: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
      ),
    })
  ),
}

export default function HistoryPage({ games }) {
  return (
    <section>
      {games.map((game, index) => (
        <HistoryEntry
          key={index}
          nameOfGame={game.nameOfGame}
          players={game.players}
        />
      ))}
    </section>
  )
}
