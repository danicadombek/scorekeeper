import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import InputLabeled from '../components/InputLabeled'
import { useHistory } from 'react-router-dom'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  let path = useHistory()
  return (
    <Grid>
      <form aria-label="Create game" onSubmit={handleSubmit}>
        <InputLabeled
          label="Name of game:"
          name="name"
          placeholder="e.g. Carcassonne"
        />
        <InputLabeled
          label="Player names:"
          name="players"
          placeholder="e.g. Jane, John"
        />
        <Button>Create game</Button>
      </form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))
    path.push('/game')
    onSubmit(nameOfGame, players)
  }
}

const Grid = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto 40px;
  column-gap: 40px;

  form {
    display: grid;
    gap: 16px;
    padding: 4px;
  }

  label {
    display: grid;
    gap: 8px;
  }
`
