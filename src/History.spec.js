import { render, screen } from '@testing-library/react'
import History from './History'

describe('History', () => {
  it('return a name, result and headline', () => {
    render(<History gamer="Jane" result={50} headline="Reactfight" />)
    expect(screen.getByText('Jane')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Reactfight')).toBeInTheDocument()
  })
})
