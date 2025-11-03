import styled from 'styled-components'

export const CartProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1.25rem;
  align-items: center;
  padding: 0.5rem 0.25rem;
  max-width: 23rem;
  background: ${(props) => props.theme.colors.baseCard};
`

export const CartProductImage = styled.img`
  grid-row: 1 / -1;
  height: 4rem;
`

export const CartProductHeader = styled.header`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartProductTitle = styled.h2`
  font: ${(props) => props.theme.text.m};
  font-weight: 400;
  color: ${(props) => props.theme.colors.baseSubtitle};
`

export const CartProductPrice = styled.data`
  font: ${(props) => props.theme.text.m};
  color: ${(props) => props.theme.colors.baseText};
`

export const CartProductFooter = styled.footer`
  display: flex;
  gap: 0.5rem;
  grid-row: 2;

  & div > button {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

export const CartProductActions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`
