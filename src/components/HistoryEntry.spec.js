import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('return a name, result and headline', () => {
    render(<HistoryEntry gamer="Jane" result={50} headline="Reactfight" />)
    expect(screen.getByText('Jane')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Reactfight')).toBeInTheDocument()
  })
})
