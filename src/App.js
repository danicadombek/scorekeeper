import Player from './Player'
import Button from './Button'
import PlayerForm from './PlayerForm'
import { useState } from 'react'
import styled from 'styled-components/macro'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'jane Doe', score: 40 },
  ])

  return (
    <MainStyle>
      {players.map((player, index) => (
        <Player
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}
      <ScoreButtons>
        <Button isActive onClick={resetScores}>
          Reset scores
        </Button>
      </ScoreButtons>
      <Button onClick={resetAll}>Reset All</Button>
      <PlayerForm onSubmit={createPlayer} />
    </MainStyle>
  )

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

  function handleMinus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
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
`

export default App
