import styled from 'styled-components'

import { Container } from '@/shared/components/container/container.styles'

export const CheckoutHeader = styled.header`
  margin-bottom: 2.5rem;

  & > div {
    & > h1 {
      font: ${(props) => props.theme.title.l};
      color: ${(props) => props.theme.colors.yellowDark};
    }

    & > p {
      font: ${(props) => props.theme.text.l};
      font-weight: 400;
      color: ${(props) => props.theme.colors.baseSubtitle};
    }
  }
`

export const CheckoutContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem 6.25rem;
`

export const CheckoutOrderDetails = styled.ul`
  width: 100%;
  max-width: 32.875rem;
  padding: 2.5rem;
  display: grid;
  row-gap: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fff, #fff),
    ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
  background-clip: padding-box, border-box;

  & > li {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    & svg {
      padding: 0.5rem;
      border-radius: 100%;
    }

    & span span,
    strong {
      display: flex;
      flex-direction: column;
    }
  }
`
