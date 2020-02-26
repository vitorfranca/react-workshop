import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrimaryHeader from 'YesterTech/PrimaryHeader'
import PrimaryFooter from 'YesterTech/PrimaryFooter'
import { useAuthState } from 'YesterTech/AuthState'
import 'YesterTech/PrimaryLayout.scss'

// Route Targets
import Home from 'YesterTech/Home'
import SignupForm from 'YesterTech/SignupForm'
import LoginForm from 'YesterTech/LoginForm'
import Account from 'YesterTech/Account'
import ProductsLayout from 'YesterTech/ProductsLayout'
import ProductSubNav from 'YesterTech/ProductSubNav'
import Checkout from 'YesterTech/Checkout'
import { useShoppingCart } from 'YesterTech/ShoppingCartState'

export default function PrimaryLayout() {
  const { authenticated, authenticate } = useAuthState()
  const { cart } = useShoppingCart()

  return (
    <div className="primary-layout">
      <div>
        <PrimaryHeader />

        <Switch>
          <Route path="/" exact>
            <main className="primary-content">
              <Home />
            </main>
          </Route>
          <Route path="/signup">
            <main className="primary-content">
              <SignupForm />
            </main>
          </Route>
          <Route path="/login">
            <main className="primary-content">
              {authenticated
                ? <Redirect to="/account" />
                : <LoginForm onAuthenticated={authenticate}
                />}
            </main>
          </Route>
          <Route path="/products" exact>
            <ProductSubNav />
            <main className="primary-content">
              <ProductsLayout />
            </main>
          </Route>
          {cart.length &&
            <Route path="/checkout">
              <main className="primary-content">
                <Checkout />
              </main>
            </Route>
          }
          {authenticated &&
            <Route path="/account">
              <main className="primary-content">
                <Account />
              </main>
            </Route>
          }

          <Redirect to="/" />
        </Switch>

        <PrimaryFooter />
      </div>
    </div >
  )
}
