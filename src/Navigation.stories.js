import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation />

export const DefaultNavi = Template.bind({})
DefaultNavi.args = {}

export const PlayNavi = Template.bind({})
PlayNavi.args = {
  activePlay: true,
  activeHistory: false,
}

export const HistoryNavi = Template.bind({})
HistoryNavi.args = {
  activePlay: false,
  activeHistory: true,
}
