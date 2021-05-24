import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Click me',
  isActive: false,
}

export const ActiveButton = Template.bind({})
ActiveButton.args = {
  children: 'I am active',
  isActive: true,
}
