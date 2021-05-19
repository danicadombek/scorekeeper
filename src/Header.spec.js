import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('returns header with a string', () => {
    render(<Header header="Codewars" />)
    expect(screen.getByText('Codewars')).toBeInTheDocument()
  })
})
