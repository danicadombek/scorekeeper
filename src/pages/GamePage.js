import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import Player from '../components/Player'
import Button from '../components/Button'

GamePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired,
  onPlayerUpdate: PropTypes.func.isRequired,
}

export default function GamePage({
  players,
  nameOfGame,
  onResetScores,
  onEndGame,
  onPlayerUpdate,
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
      <Buttons>
        <Button onClick={onResetScores}>Reset scores</Button>
        <Button onClick={onEndGame}>End game</Button>
      </Buttons>
    </section>
  )
}
const Buttons = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 230px;
  justify-items: center;
`
