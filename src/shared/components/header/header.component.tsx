import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

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
        <NavLink to="/">
          <Logo src="./svgs/logo.svg" alt="Coffee Delivery" />
        </NavLink>
        <HeaderActions>
          <Local>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </Local>
          <NavLink to="/checkout">
            <CartWithBadgeComponent />
          </NavLink>
        </HeaderActions>
      </HeaderContainer>
    </Header>
  )
}
