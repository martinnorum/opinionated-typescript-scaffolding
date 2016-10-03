import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import diffLogger from '@plotagon/diff-logger-middleware'
import RavenMiddleware from 'redux-raven-middleware'
import metrics from '@plotagon/metrics-middleware'
import rootReducer from './bootstrap/rootReducer'
import createUnityMiddleware from '@plotagon/unity-middleware'
import { routerMiddleware } from 'react-router-redux'
import persistState from './modules/Persistence/persistence'


export default function (initialState, unityIntegration, browserHistory) {

  const middlewares = []

  middlewares.push(
    createUnityMiddleware(unityIntegration)
  )

  // We only want reporting in production.
  if (!initialState.getIn(['appConfig', 'environment'], 'production') === 'production') {
    middlewares.push(RavenMiddleware('https://7f6822b49aba4993b9ccc6f85a9e3110@app.getsentry.com/74513'))
  }

  if (initialState.getIn(['appConfig', 'loggingEnabled'], false)) {
    middlewares.push(diffLogger)
    middlewares.push(createLogger({
      stateTransformer: (state) => { return state.toJSON() },
      collapsed: true
    }))
  }

  middlewares.push(metrics)
  middlewares.push(routerMiddleware(browserHistory))


  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      persistState(['auth']),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
