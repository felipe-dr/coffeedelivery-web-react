import styled from 'styled-components'

import { Container } from '@/shared/components/container/container.styles'

export const CheckoutContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CheckoutOrder = styled.section`
  width: 100%;
  max-width: 40rem;
`

export const CheckoutFormTitle = styled.h2`
  font: ${(props) => props.theme.title.xs};
  color: ${(props) => props.theme.colors.baseSubtitle};
  margin-bottom: 1rem;
`

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`

export const CheckoutBox = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px;
`

export const CheckoutHeader = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  & > div > h3 {
    margin-bottom: 0.125rem;
    font: ${(props) => props.theme.text.m};
    font-weight: 400;
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  & > div > p {
    font: ${(props) => props.theme.text.s};
  }
`

export const CheckoutFieldset = styled.fieldset`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`
export const CheckoutSummary = styled.aside`
  width: 100%;
  max-width: 28rem;
`

export const CheckoutSummaryBox = styled(CheckoutBox)`
  padding-top: 1rem;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  > *:not(:nth-last-child(-n + 2)) {
    padding: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.baseButton};
  }

  > button[type='submit'] {
    width: 100%;
  }
`

export const CheckoutSummaryTable = styled.table`
  width: 100%;
  margin-bottom: 0.75rem;
  border-collapse: separate;
  border-spacing: 0 0.75rem;

  & > caption {
    position: absolute !important;
    width: 1px;
    height: 1px;
    white-space: nowrap;
    overflow: hidden;
  }

  & th {
    text-align: left;
  }

  & td {
    text-align: right;
  }

  & > tbody th {
    font: ${(props) => props.theme.text.s};
  }

  & > tbody td {
    font: ${(props) => props.theme.text.m};
    font-weight: 400;
  }

  & > tfoot {
    font: ${(props) => props.theme.text.l};
    color: ${(props) => props.theme.colors.baseSubtitle};
  }
`
