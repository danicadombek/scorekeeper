import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation />

export const DefaultNavi = Template.bind({})
DefaultNavi.args = {
  children: 'Play',
  isActive: true,
}

export const ActiveNavi = Template.bind({})
ActiveNavi.args = {
  children: 'History',
  isActive: true,
}
