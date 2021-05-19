import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Add player:
        <input name="name" type="text" placeholder="Player name"></input>
      </label>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
  }
}

const Form = styled.form`
  display: grid;
`
