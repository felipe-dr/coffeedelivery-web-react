import { ContainerComponent } from '@/shared/components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutOrderDetails,
} from './styles'

export default function CheckoutSuccessPage() {
  const theme = useTheme()

  return (
    <section>
      <CheckoutHeader>
        <ContainerComponent>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </ContainerComponent>
      </CheckoutHeader>
      <CheckoutContainer>
        <CheckoutOrderDetails>
          <li>
            <MapPin
              size={32}
              weight="fill"
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.purple }}
            />
            <span>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </span>
          </li>
          <li>
            <Timer
              size={32}
              weight="fill"
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.yellow }}
            />
            <span>
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </span>
          </li>
          <li>
            <CurrencyDollar
              size={32}
              weight="fill"
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.yellowDark }}
            />
            <span>
              Pagamento na entrega
              <strong>Cartão de Crédito</strong>
            </span>
          </li>
        </CheckoutOrderDetails>
        <img src="/images/delivery.svg" alt="Pedido confirmado" />
      </CheckoutContainer>
    </section>
  )
}
