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

  //   const [player1, player2, player3, player4] = screen.getAllByText(
  //   )
  //   expect(player1).toHaveTextContent('John')
  //   //   expect(player2).toHaveTextContent(/Jane.*3/)
  //   //   expect(player3).toHaveTextContent(/John.*8/)
  //   //   expect(player4).toHaveTextContent(/Jane.*5/)
})
