import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputContainer from './InputContainer'

export default {
  title: 'components/InputContainer',
  component: InputContainer,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof InputContainer>

const Template: ComponentStory<typeof InputContainer> = (args) => <InputContainer {...args} />

export const Default = Template.bind({})

Default.args = {
  
}