import * as React from 'react'
import {
  Route,
  IndexRedirect
} from 'react-router'

import { AppContainer } from './App'
import { WelcomeScreenContainer} from './modules/WelcomeScreen/WelcomeScreen'

export default function createRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/upload" />
      <Route path="/upload" component={WelcomeScreenContainer} />
      <Route path="/analyze" component={WelcomeScreenContainer} />
      <Route path="/vouchers" component={WelcomeScreenContainer} />
      <Route path="/match" component={WelcomeScreenContainer} />
      <Route path="/export" component={WelcomeScreenContainer} />
    </Route>
  )
}
