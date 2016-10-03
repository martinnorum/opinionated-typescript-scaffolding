/**
 * Modified version of the https://raw.githubusercontent.com/reactjs/react-router-redux/master/src/reducer.js
 * to support ImmutableJs
 */
import Immutable from 'immutable'
import {
  LOCATION_CHANGE
} from 'react-router-redux'

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
})

export default function reducer (state = initialState, action) {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    })
  }

  return state
}
