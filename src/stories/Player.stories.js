import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const MinButton = Template.bind({})
MinButton.args = {
  score: 0,
  playerName: 'John Doe',
}

export const MaxButton = Template.bind({})
MaxButton.args = {
  score: 0,
  playerName: 'John Doe',
}
