import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from '../src/components/Header'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import styled from 'styled-components/macro'

function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState([])
  const [nameOfGame, setnameOfGame] = useState('')

  return (
    <Router>
      <AppGrid>
        <Header />
        <Switch>
          <Route exact path="/create">
            <CreatePage onSubmit={handleSubmit} />
            <Navigation
              onNavigate={setCurrentPageId}
              currentPageId={currentPageId}
              pages={[
                { title: 'Create', id: 'create' },
                { title: 'History', id: 'history' },
              ]}
            />
          </Route>

          <Route exact path="/game">
            <GamePage
              nameOfGame={nameOfGame}
              players={players}
              onResetScores={resetScores}
              onEndGame={handleEndGame}
              onPlayerUpdate={updateScore}
            />
          </Route>

          <Route exact path="/history">
            <HistoryPage games={history} onNavigate={setCurrentPageId} />
          </Route>
        </Switch>
      </AppGrid>
    </Router>
  )

  function handleSubmit(nameOfGame, players) {
    setPlayers(players)
    setnameOfGame(nameOfGame)
    setCurrentPageId('game')
  }

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ players, nameOfGame }, ...history])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }
}

const AppGrid = styled.section`
  display: grid;
  gap: 30px;
`

const ScoreButtons = styled.section`
  display: flex;
  justify-content: space-evenly;
`

export default App
