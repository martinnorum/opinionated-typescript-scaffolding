import React from 'react'
import {
  Route,
  IndexRedirect
} from 'react-router'

import { AppContainer } from './App'
import { WelcomeScreenContainer} from './modules/WelcomeScreen/WelcomeScreen'

export default function createRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/welcome" />
      <Route path="/welcome" component={WelcomeScreenContainer} />
    </Route>
  )
}
