import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('returns two buttons', () => {
    render(
      <Navigation
        currentPageId="1"
        onNavigate={jest.fn()}
        pages={[
          { title: 'Create', id: '1' },
          { title: 'History', id: '2' },
        ]}
      />
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
    expect(buttons[0]).toHaveTextContent('Create')
    expect(buttons[1]).toHaveTextContent('History')
  })

  it('send is "play" when clicking on "Play"', () => {
    const handleNavigate = jest.fn()

    render(
      <Navigation
        currentPageId="play"
        onNavigate={handleNavigate}
        pages={[
          { title: 'Create', id: 'create' },
          { title: 'History', id: 'history' },
        ]}
      />
    )

    const playButton = screen.getByRole('button', { name: 'Create' })
    userEvent.click(playButton)
    expect(handleNavigate).toHaveBeenCalledWith('create')

    const historyButton = screen.getByRole('button', { name: 'History' })
    userEvent.click(historyButton)
    expect(handleNavigate).toHaveBeenCalledWith('history')
  })
})
