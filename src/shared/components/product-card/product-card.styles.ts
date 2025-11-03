import styled from 'styled-components'

export const ProductCardWrapper = styled.article`
  max-width: 16rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.theme.colors.baseCard};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const ProductCardImage = styled.img`
  margin-top: -2.5rem;
  height: 7.5rem;
`

export const ProductCardTags = styled.ul`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`

export const ProductCardTag = styled.li`
  padding: 0.25rem 0.5rem;
  font: ${(props) => props.theme.text.tag};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.yellowDark};
  background: ${(props) => props.theme.colors.yellowLigh};
  border-radius: 6.25rem;
`

export const ProductCardTitle = styled.h2`
  font: ${(props) => props.theme.title.s};
  color: ${(props) => props.theme.colors.baseSubtitle};
`

export const ProductCardDescription = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font: ${(props) => props.theme.text.s};
  color: ${(props) => props.theme.colors.baseLabel};
`

export const ProductCardFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ProductCardPrice = styled.data`
  font: ${(props) => props.theme.title.m};
  color: ${(props) => props.theme.colors.baseText};
`

export const ProductCardCoin = styled.span`
  font: ${(props) => props.theme.text.s};
  color: ${(props) => props.theme.colors.baseText};
`

export const ProductCardActions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`
