import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import RavenMiddleware from 'redux-raven-middleware'
import rootReducer from './bootstrap/rootReducer'
import { routerMiddleware } from 'react-router-redux'


export default function (initialState, browserHistory) {

  const middlewares = []

  middlewares.push(routerMiddleware(browserHistory))

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
