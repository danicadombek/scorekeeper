import Player from './Player'
import Button from './Button'
import PlayerForm from './PlayerForm'
import { useState } from 'react'

import './App.css'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 20 },
    { name: 'jane Doe', score: 40 },
  ])

  return (
    <div className="App">
      {players.map((player, index) => (
        <Player
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}

      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={resetAll}>Reset All</Button>
      <PlayerForm onSubmit={createPlayer} />
    </div>
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
export default App
