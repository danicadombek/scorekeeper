import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyle {...props} />
}

const ButtonStyle = styled.button`
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
