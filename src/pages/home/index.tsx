import { ContainerComponent, ProductCardComponent } from '@/shared/components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { products } from '../../data/products.json'

import {
  HomeContainer,
  HomeHeader,
  HomeHeaderInfos,
  HomeProducts,
  HomeSection,
  HomeSectionImage,
} from './styles'

export default function HomePage() {
  const theme = useTheme()

  return (
    <>
      <HomeSection>
        <HomeContainer>
          <HomeHeader>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <HomeHeaderInfos>
              <li>
                <ShoppingCart
                  size="32"
                  weight="fill"
                  color={theme.colors.background}
                  style={{ background: theme.colors.yellowDark }}
                />
                Compra simples e segura
              </li>
              <li>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.baseText }}
                />
                Embalagem mantém o café intacto
              </li>
              <li>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                Entrega rápida e rastreada
              </li>
              <li>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                O café chega fresquinho até você
              </li>
            </HomeHeaderInfos>
          </HomeHeader>
          <HomeSectionImage src="/images/hero-coffee.svg" alt="" />
        </HomeContainer>
      </HomeSection>
      <HomeProducts>
        <ContainerComponent>
          <h2>Nossos cafés</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCardComponent product={product} />
              </li>
            ))}
          </ul>
        </ContainerComponent>
      </HomeProducts>
    </>
  )
}
