import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { z } from 'zod'

import { CartContext } from '@/contexts'
import {
  ButtonComponent,
  CartProductComponent,
  InputComponent,
  RadioComponent,
} from '@/shared/components'

import {
  CheckoutBox,
  CheckoutContainer,
  CheckoutFieldset,
  CheckoutForm,
  CheckoutFormTitle,
  CheckoutHeader,
  CheckoutOrder,
  CheckoutPaymentMethod,
  CheckoutPaymentMethodErrorMessage,
  CheckoutSummary,
  CheckoutSummaryBox,
  CheckoutSummaryTable,
} from './styles'

type CheckoutFormType = {
  postalCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const checkoutFormSchema = z.object({
  postalCode: z.string().min(7, 'Informe um CEP').max(7, 'Informe um CEP'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export default function CheckoutPage() {
  const theme = useTheme()

  const { cart, getTotalItemsPriceFormatted, getTotalCartFormatted } =
    useContext(CartContext)

  const checkoutForm = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      postalCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: undefined,
    },
  })

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = checkoutForm

  const selectedPaymentMethod = watch('paymentMethod')

  const handleCheckout: SubmitHandler<CheckoutFormType> = (data) => {
    alert('OK')
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <CheckoutOrder>
        <CheckoutFormTitle>Complete seu pedido</CheckoutFormTitle>
        <CheckoutForm id="checkout" onSubmit={handleSubmit(handleCheckout)}>
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
                placeholder="CEP"
                error={errors.postalCode}
                inputWrapperProps={{ style: { gridArea: 'cep' } }}
                {...register('postalCode')}
              />
              <InputComponent
                placeholder="Rua"
                inputWrapperProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />
              <InputComponent
                placeholder="Número"
                inputWrapperProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />
              <InputComponent
                placeholder="Complemento"
                isOptional
                inputWrapperProps={{ style: { gridArea: 'complement' } }}
                {...register('complement')}
              />
              <InputComponent
                placeholder="Bairro"
                inputWrapperProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <InputComponent
                placeholder="Cidade"
                inputWrapperProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />
              <InputComponent
                placeholder="UF"
                maxLength={2}
                inputWrapperProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
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
            <div>
              <CheckoutPaymentMethod>
                <RadioComponent
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </RadioComponent>
                <RadioComponent
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </RadioComponent>
                <RadioComponent
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </RadioComponent>
              </CheckoutPaymentMethod>
              {errors.paymentMethod && (
                <CheckoutPaymentMethodErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </CheckoutPaymentMethodErrorMessage>
              )}
            </div>
          </CheckoutBox>
        </CheckoutForm>
      </CheckoutOrder>
      <CheckoutSummary>
        <CheckoutFormTitle>Cafés selecionados</CheckoutFormTitle>
        <CheckoutSummaryBox>
          {cart.map((item) => (
            <CartProductComponent key={item.id} product={item} />
          ))}
          <CheckoutSummaryTable>
            <caption>Resumo do pedido</caption>
            <tbody>
              <tr>
                <th scope="row">Total de itens</th>
                <td>
                  <data value={getTotalItemsPriceFormatted()}>
                    R$ {getTotalItemsPriceFormatted()}
                  </data>
                </td>
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
                  <strong>
                    <data value={getTotalCartFormatted()}>
                      R$ {getTotalCartFormatted()}
                    </data>
                  </strong>
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
