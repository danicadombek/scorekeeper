import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import InputLabeled from '../components/InputLabeled'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  return (
    <Grid>
      <form onSubmit={handleSubmit}>
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

    const game = {
      nameOfGame,
      players,
    }
    onSubmit(game)
  }
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 40px;

  form {
    display: grid;
    gap: 16px;
  }

  label {
    display: grid;
    gap: 8px;
  }
`
