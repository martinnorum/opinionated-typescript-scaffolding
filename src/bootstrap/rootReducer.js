import { combineReducers } from 'redux-immutable'
import routerReducer from '../modules/ImmutableRoute/immutableRouterReducer'

const rootReducer = combineReducers({
  appConfig: state => state,
  routing: routerReducer,
})

export default rootReducer
