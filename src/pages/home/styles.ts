import styled from 'styled-components'

import { Container } from '@/shared/components/container/container.styles'

export const HomeSection = styled.section`
  padding-top: 3.75rem;
  padding-bottom: 6.25rem;
`

export const HomeContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 3.5rem;
`

export const HomeHeader = styled.header`
  max-width: 36.75rem;

  & > h1 {
    margin-bottom: 1rem;
    font: ${(props) => props.theme.title.xl};
    color: ${(props) => props.theme.colors.baseTitle};
  }

  & > p {
    margin-bottom: 4.125rem;
    font: ${(props) => props.theme.text.l};
    color: ${(props) => props.theme.colors.baseSubtitle};
  }
`

export const HomeHeaderInfos = styled.ul`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 1.25rem;

  > li {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 100%;
    }
  }
`

export const HomeSectionImage = styled.img`
  height: 22.5rem;
`

export const HomeProducts = styled.section`
  & > div > h2 {
    margin-bottom: 3.25rem;
    font: ${(props) => props.theme.title.l};
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  & > div > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2.5rem 2rem;
  }
`
