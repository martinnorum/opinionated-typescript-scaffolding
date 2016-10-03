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

import ApplicationPlatformConstants from './ApplicationPlatformConstants'
import createUnityIntegration from './utils/createUnityIntegration'
import * as mockedUnityIntegration from '@plotagon/mock-unity-integration'

import applicationStore from './applicationStore'

import setupUnity from './bootstrap/setupUnity'
import loadInitialData from './bootstrap/loadInitialData'
import parseAppConfig from './utils/appConfig'
import { syncHistoryWithStore } from 'react-router-redux'
// eslint-disable-next-line
import css from '../styles/main.scss'

import createRoutes from './Routes'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const initialState = fromJS({ "appConfig": parseAppConfig(window.location.search) })

const platform = initialState.getIn(['appConfig', 'platform'], ApplicationPlatformConstants.MOCK)

const unityIntegration = platform === ApplicationPlatformConstants.MOCK
  ? mockedUnityIntegration
  : createUnityIntegration(window.engine)

const historyType = platform === ApplicationPlatformConstants.IPHONE_PLAYER
  ? createMemoryHistory()
  : hashHistory

const store = applicationStore(
  initialState,
  unityIntegration,
  historyType
)

const history = syncHistoryWithStore(historyType, store, {
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

setupUnity(store.dispatch, unityIntegration)
  .then(loadInitialData(store.dispatch))

const runningMockUnity = platform === ApplicationPlatformConstants.MOCK
// Fake a bunch of events that's normally sent by the Unity layer at start up
if (runningMockUnity) {
  unityIntegration.trigger('Ready')
  unityIntegration.trigger('appBecameActive')
}
