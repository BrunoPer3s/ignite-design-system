import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from "@ignite-ui/react"

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Create account'
  }
} as Meta

export const Primary: StoryObj = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
}
