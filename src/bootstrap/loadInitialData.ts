export default function loadInitialData(dispatch) {
  return () => {
    return dispatch({type: LOAD_INITIAL_DATA_SUCCESS})
  }
}
