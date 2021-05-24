import { useState } from 'react'
import Navigation from './components/Navigation'
import Header from '../src/components/Header'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState([])
  const [nameOfGame, setnameOfGame] = useState('')

  const navButtons = ['create', 'history']

  return (
    <Router>
      <AppGrid>
        <Header />
        <div>
          <Switch>
            <Route path="/">
              <CreatePage
                onSubmit={handleSubmit}
                onNavigate={setCurrentPageId}
              />
            </Route>

            <Route path="/game">
              <GamePage
                nameOfGame={nameOfGame}
                players={players}
                onResetScores={resetScores}
                handleEndGame={handleEndGame}
                onPlayerUpdate={updateScore}
              />
            </Route>

            <Route path="/history">
              <HistoryPage games={history} onNavigate={setCurrentPageId} />
            </Route>
          </Switch>
        </div>

        {currentPageId !== 'game' && (
          <div>
            {navButtons.map(button => (
              <Link to={'/' + button}>
                <Navigation
                  currentPageId={currentPageId}
                  onNavigate={setCurrentPageId}
                  pages={[{ title: button, id: button }]}
                />
              </Link>
            ))}
          </div>
        )}
      </AppGrid>
    </Router>
  )

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ players, nameOfGame }, ...history])
  }

  function handleSubmit(nameOfGame, players) {
    setPlayers(players)
    setnameOfGame(nameOfGame)
    setCurrentPageId('game')
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
