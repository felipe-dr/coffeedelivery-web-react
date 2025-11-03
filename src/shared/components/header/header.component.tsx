import { MapPin } from 'phosphor-react'

import { CartWithBadgeComponent } from '../cart-with-badge/cart-with-badge.component'
import {
  Header,
  HeaderActions,
  HeaderContainer,
  Local,
  Logo,
} from './header.styles'

export function HeaderComponent() {
  return (
    <Header>
      <HeaderContainer>
        <Logo src="./svgs/logo.svg" alt="Coffee Delivery" />
        <HeaderActions>
          <Local>
            <MapPin weight="fill" /> Porto Alegre, RS
          </Local>
          <CartWithBadgeComponent />
        </HeaderActions>
      </HeaderContainer>
    </Header>
  )
}
