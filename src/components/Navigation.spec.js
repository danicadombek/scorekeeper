import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('returns two buttons', () => {
    render(<Navigation />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
  })
})
