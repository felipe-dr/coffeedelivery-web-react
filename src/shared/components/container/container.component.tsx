import { ReactNode } from 'react'

import { Container } from './container.styles'

interface ContainerComponentProps {
  children: ReactNode
}

export function ContainerComponent({ children }: ContainerComponentProps) {
  return <Container>{children}</Container>
}
