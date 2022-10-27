import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet culpa id magni! Culpa veritatis tenetur animi esse reprehenderit distinctio, tempora in fugit quasi, suscipit recusandae ipsa dolorum delectus sunt.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
