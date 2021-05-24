import { render, screen } from '@testing-library/react'
import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  it('render history of games', () => {
    render(
      <HistoryPage
        games={[
          {
            nameOfGame: 'Carcassonne',
            players: [
              { name: 'John', score: 2 },
              { name: 'Jane', score: 3 },
            ],
          },
          {
            nameOfGame: 'Kniffel',
            players: [
              { name: 'John', score: 8 },
              { name: 'Jane', score: 5 },
            ],
          },
        ]}
      />
    )

    const [firstHeading, secondHeading] = screen.getAllByRole('heading')
    expect(firstHeading).toHaveTextContent('Carcassonne')
    expect(secondHeading).toHaveTextContent('Kniffel')
  })
})
