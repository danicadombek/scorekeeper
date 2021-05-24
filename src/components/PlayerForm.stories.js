import React from 'react'
import PlayerForm from './PlayerForm'

export default {
  title: 'PlayerForm',
  component: PlayerForm,
  argTypes: { onSubmit: { action: 'onSubmit' } },
}

export const DefaultForm = args => <PlayerForm {...args} />
