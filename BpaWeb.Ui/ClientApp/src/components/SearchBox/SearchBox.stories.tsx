import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchBox from './SearchBox'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/SearchBox',
  component: SearchBox,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
  // parameters: {
  //   controls: { expanded: true },
  // },
} as ComponentMeta<typeof SearchBox>

const Template: ComponentStory<typeof SearchBox> = (args) => <SearchBox {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {
}
