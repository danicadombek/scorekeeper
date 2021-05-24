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
    <Grid>
      <Header>{nameOfGame}</Header>
      <PlayerList aria-label="Player scores">
        {players.map(({ name, score }, index) => (
          <li key={name}>
            <Player
              onMinus={() => onPlayerUpdate(index, -1)}
              onPlus={() => onPlayerUpdate(index, 1)}
              name={name}
              score={score}
            />
          </li>
        ))}
      </PlayerList>

      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </Grid>
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

const Grid = styled.section`
  display: grid;
  align-content: start;
  gap: 20px;
`

const PlayerList = styled.ul`
  list-style: none;
  padding: 0;
`
