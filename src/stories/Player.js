import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  onClick: PropTypes.func,
  score: PropTypes.number,
}

export default function Player({ onClick, score, playerName }) {
  return (
    <section className="Player">
      {playerName}
      <button className="MinButton Player-button" onClick={onClick}>
        -
      </button>
      {score}
      <button className="MaxButton Player-button" onClick={onClick}>
        +
      </button>
    </section>
  )
}
