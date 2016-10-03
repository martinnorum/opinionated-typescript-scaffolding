import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  createMemoryHistory,
  hashHistory
} from 'react-router'

import createMaterialUITheme from './bootstrap/createMaterialUITheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Provider } from 'react-redux'

import { fromJS } from 'immutable'

import applicationStore from './applicationStore'

import loadInitialData from './bootstrap/loadInitialData'
import parseAppConfig from './utils/appConfig'
import { syncHistoryWithStore } from 'react-router-redux'

import createRoutes from './Routes'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const initialState = fromJS({ "appConfig": parseAppConfig(window.location.search) })

const store = applicationStore(
  initialState,
  hashHistory
)

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState (state) {
    return state.getIn(['routing']).toJS()
  }
})

const routes = createRoutes(store)
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={createMaterialUITheme()}>
      <Router history={history}>{routes}</Router>
    </MuiThemeProvider>
  </Provider>,
  // Use class name so that old css is not outdated.
  // Would prefer to use ID instead
  document.getElementsByClassName('app')[0]
)
