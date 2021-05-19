import React from 'react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const IndexHeader = Template.bind({})
IndexHeader.args = {
  header: 'Scorekeeper',
  background: 'blue',
}

export const GameHeader = Template.bind({})
GameHeader.args = {
  header: 'Codewars',
  background: 'yellow',
}

export const HistoryHeader = Template.bind({})
HistoryHeader.args = {
  header: 'History',
  background: 'red',
}
