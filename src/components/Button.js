// import React from 'react'
// import './Button.css'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

// Button.propTypes = {
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node,
// }

// export default function Button({ onClick, isActive, children }) {
//   return (
//     <button onClick={onClick} className={isActive ? 'Button active' : 'Button'}>
//       {children}
//     </button>
//   )
// }

const Button = styled.button`
  background: ${props => (props.isActive ? 'grey' : 'steelblue')};
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: snow;
  width: 100px;

  &:hover {
    background: green;
  }
`
export default Button
