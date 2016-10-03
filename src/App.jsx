import React, {PropTypes, Component} from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import {connect} from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

export class App extends Component {

  shouldComponentUpdate = (nextProps, nextState) => shallowCompare(this, nextProps, nextState)

  render() {
    return (
      <div style={styles.root} >
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

function mapStateToProps(state) {
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
