import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation />

export const DefaultNavi = Template.bind({})
DefaultNavi.args = {
  children: 'Click me',
  isActive: false,
}

export const ActiveNavi = Template.bind({})
ActiveNavi.args = {
  children: 'I am active',
  isActive: true,
}
