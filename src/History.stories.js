import React from 'react'
import History from './History'

export default {
  title: 'History',
  component: History,
}

const Template = args => <History {...args} />

export const FirstGame = Template.bind({})
FirstGame.args = {
  headline: 'Codewars',
}

export const SecondGame = Template.bind({})
SecondGame.args = {
  headline: 'Reactfight',
}

export const FirstGamer = Template.bind({})
FirstGamer.args = {
  gamer: 'John Doe',
  result: 20,
}
export const SecondGamer = Template.bind({})
SecondGamer.args = {
  gamer: 'Jane Doe',
  result: 50,
}
