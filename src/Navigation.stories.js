import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation />

export const DefaultNavi = Template.bind({})
DefaultNavi.args = {}

export const LeftNavi = Template.bind({})
LeftNavi.args = {
  showPlay: true,
  showHistory: false,
}

export const RightNavi = Template.bind({})
RightNavi.args = {
  showPlay: false,
  showHistory: true,
}
