import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {name}
      <button className="Player-button" onClick={onMinus}>
        -
      </button>
      {score}{' '}
      <button className="Player-button" onClick={onPlus}>
        +
      </button>
    </section>
  )
}
