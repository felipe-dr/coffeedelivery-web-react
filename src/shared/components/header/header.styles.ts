import styled from 'styled-components'

import { ButtonComponentProps } from '../button/button.component'
import { Button } from '../button/button.styles'
import { Container } from '../container/container.styles'

export const Header = styled.header`
  padding: 2rem 0;
  background: ${(props) => props.theme.colors.background};
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Logo = styled.img`
  height: 2.5rem;
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Local = styled(Button).attrs({
  variant: 'secondary',
})<ButtonComponentProps>`
  height: auto;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.purpleDark};
  text-transform: initial;
  background: ${(props) => props.theme.colors.purpleLight};
`
