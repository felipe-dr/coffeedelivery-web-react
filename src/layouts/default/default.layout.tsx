import { Outlet } from 'react-router-dom'

import { HeaderComponent } from '@/shared/components'

import { Main } from './default.styles'

export function DefaultLayout() {
  return (
    <>
      <HeaderComponent />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
