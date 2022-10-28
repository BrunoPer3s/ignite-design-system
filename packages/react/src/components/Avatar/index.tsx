import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImg } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImg> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImg {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
