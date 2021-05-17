import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button({ onClick, isActive, children }) {
  return (
    <button onClick={onClick} className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
