import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray800',
  padding: '$4',
  borderRadius: '$md',
  border: '1px solid $gray600',
})

export type ButtonProps = ComponentProps<typeof Box>
