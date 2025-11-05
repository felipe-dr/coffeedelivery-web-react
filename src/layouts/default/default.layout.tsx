import { Outlet } from 'react-router-dom'

import { HeaderComponent } from '@/shared/components'

export function DefaultLayout() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
    </>
  )
}
