import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '@/layouts'

import CheckoutPage from '@/pages/checkout'
import CheckoutSuccessPage from '@/pages/checkout-success'
import HomePage from '@/pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Route>
    </Routes>
  )
}
