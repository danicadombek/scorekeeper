import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders children', async () => {
    const { container } = render(<Header>Scorekeeper</Header>)
    expect(container.firstChild).toHaveTextContent('Scorekeeper')
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
