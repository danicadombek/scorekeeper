import Player from '../components/Player'
import Button from '../components/Button'
import PlayerForm from '../components/PlayerForm'
import { useState } from 'react'
import styled from 'styled-components/macro'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'Jane Doe', score: 40 },
  ])

  return (
    <MainStyle>
      {players.map((player, index) => (
        <Player
          onMinus={() => updateScore(index, -1)}
          onPlus={() => updateScore(index, 1)}
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}
      <ScoreButtons>
        <Button isActive onClick={resetScores}>
          Reset scores
        </Button>
        <Button onClick={resetAll}>Reset All</Button>
      </ScoreButtons>
      <PlayerForm onSubmit={createPlayer} />
    </MainStyle>
  )

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

const MainStyle = styled.section`
  display: grid;
  gap: 30px;
`

const ScoreButtons = styled.section`
  display: flex;
  justify-content: space-evenly;
`

export default App
