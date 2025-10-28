import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react'

import { Button, ButtonVariants } from './button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonComponentProps = {
  as?: ElementType
  children: ReactNode
} & ButtonTypes &
  ButtonVariants

export function ButtonComponent({
  variant = 'primary',
  children,
  ...props
}: ButtonComponentProps) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  )
}
