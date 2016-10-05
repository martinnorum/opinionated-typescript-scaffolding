import * as React from 'react'
import * as shallowCompare from 'react-addons-shallow-compare'
import { connect } from 'react-redux'

interface AppProps {
  children: any
}
interface AppState {
}

export class App extends React.Component<AppProps, AppState> {

  static propTypes = {
    children: React.PropTypes.node
  }

  shouldComponentUpdate = (nextProps, nextState) => shallowCompare(this, nextProps, nextState)

  render() {
    return (
      <div style={styles.root} >
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps() {
  return {
  }
}

export const AppContainer = connect(
  mapStateToProps
)(App)

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    width: '100%',
    height: '100%',
  }
}
