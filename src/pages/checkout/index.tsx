import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { products } from '@/data/products.json'

import {
  ButtonComponent,
  CartProductComponent,
  InputComponent,
} from '@/shared/components'

import {
  CheckoutBox,
  CheckoutSummaryBox,
  CheckoutContainer,
  CheckoutFieldset,
  CheckoutForm,
  CheckoutFormTitle,
  CheckoutHeader,
  CheckoutSummaryTable,
  CheckoutSummary,
  CheckoutOrder,
} from './styles'

export default function CheckoutPage() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <CheckoutOrder>
        <CheckoutFormTitle>Complete seu pedido</CheckoutFormTitle>
        <CheckoutForm id="checkout">
          <CheckoutBox>
            <CheckoutHeader>
              <MapPinLine size={20} color={theme.colors.yellowDark} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutHeader>
            <CheckoutFieldset>
              <InputComponent
                name="postalCode"
                placeholder="CEP"
                inputWrapperProps={{ style: { gridArea: 'cep' } }}
              />
              <InputComponent
                name="street"
                placeholder="Rua"
                inputWrapperProps={{ style: { gridArea: 'street' } }}
              />
              <InputComponent
                name="number"
                placeholder="Número"
                inputWrapperProps={{ style: { gridArea: 'number' } }}
              />
              <InputComponent
                name="complement"
                placeholder="Complemento"
                isOptional
                inputWrapperProps={{ style: { gridArea: 'complement' } }}
              />
              <InputComponent
                name="neighborhood"
                placeholder="Bairro"
                inputWrapperProps={{ style: { gridArea: 'neighborhood' } }}
              />
              <InputComponent
                name="city"
                placeholder="Cidade"
                inputWrapperProps={{ style: { gridArea: 'city' } }}
              />
              <InputComponent
                name="state"
                placeholder="UF"
                inputWrapperProps={{ style: { gridArea: 'state' } }}
              />
            </CheckoutFieldset>
          </CheckoutBox>
          <CheckoutBox>
            <CheckoutHeader>
              <CurrencyDollar size={20} color={theme.colors.purple} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CheckoutHeader>
          </CheckoutBox>
        </CheckoutForm>
      </CheckoutOrder>
      <CheckoutSummary>
        <CheckoutFormTitle>Cafés selecionados</CheckoutFormTitle>
        <CheckoutSummaryBox>
          <CartProductComponent product={products[0]} />
          <CartProductComponent product={products[2]} />
          <CheckoutSummaryTable>
            <caption>Resumo do pedido</caption>
            <tbody>
              <tr>
                <th scope="row">Total de itens</th>
                <td>R$ 250,00</td>
              </tr>
              <tr>
                <th scope="row">Entrega</th>
                <td>R$ 25,00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>
                  <strong>R$ 275,00</strong>
                </td>
              </tr>
            </tfoot>
          </CheckoutSummaryTable>
          <ButtonComponent type="submit" form="checkout">
            Confirmar pedido
          </ButtonComponent>
        </CheckoutSummaryBox>
      </CheckoutSummary>
    </CheckoutContainer>
  )
}
