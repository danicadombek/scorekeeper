import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <PlayerStyle>
      {name}
      <Grid>
        <button onClick={onMinus}>-</button>
        <output>{score}</output>
        <button onClick={onPlus}>+</button>
      </Grid>
    </PlayerStyle>
  )
}

const PlayerStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: rgb(209, 208, 208);
  padding: 20px;

  button {
    background: rgb(231, 229, 112);
    padding: 8px;
    border: none;
    border-radius: 4px;
  }
`
const Grid = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`
