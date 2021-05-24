import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import Player from '../components/Player'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

GamePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  handleEndGame: PropTypes.func.isRequired,
  onPlayerUpdate: PropTypes.func.isRequired,
}

export default function GamePage({
  players,
  nameOfGame,
  onResetScores,
  handleEndGame,
  onPlayerUpdate,
}) {
  let path = useHistory()
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
        <Button onClick={handleClick}>End game</Button>
      </Buttons>
    </section>
  )

  function handleClick(event) {
    handleEndGame(event)
    path.push('/history')
  }
}
const Buttons = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 230px;
  justify-items: center;
`
