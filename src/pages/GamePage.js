import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import Player from '../components/Player'
import CreatePage from './CreatePage'

CreatePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onPlayerUpdate: PropTypes.func,
  onResetScores: PropTypes.func,
  onEndGame: PropTypes.func,
}

export default function GamePage({
  nameOfGame,
  players,
  onPlayerUpdate,
  onResetScores,
  onEndGame,
}) {
  return (
    <section>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          onMinus={() => onPlayerUpdate(index, -1)}
          onPlus={() => onPlayerUpdate(index, 1)}
          key={name}
          name={name}
          score={score}
        />
      ))}
      <Button onClick={onResetScores}>Reset score</Button>
      <Button onClick={onEndGame}>End game</Button>
    </section>
  )
}
