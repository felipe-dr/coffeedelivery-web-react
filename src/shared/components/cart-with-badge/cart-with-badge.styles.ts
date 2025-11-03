import styled from 'styled-components'

import { ButtonComponentProps } from '../button/button.component'
import { Button } from '../button/button.styles'

export const CartWithBadge = styled(Button).attrs({
  variant: 'icon',
})<ButtonComponentProps>`
  position: relative;
  background: ${(props) => props.theme.colors.yellowLigh};
  color: ${(props) => props.theme.colors.yellowDark};

  &:hover {
    background: ${(props) => props.theme.colors.yellowLigh};
  }
`

export const CartWithBadgeTotal = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${(props) => props.theme.text.xs};
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.yellowDark};
  border-radius: 100%;
`
