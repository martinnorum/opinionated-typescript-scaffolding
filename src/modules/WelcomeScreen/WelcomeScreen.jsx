import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import shallowCompare from 'react-addons-shallow-compare'
import RaisedButton from 'material-ui/RaisedButton'
import * as appConstants from '../../utils/appConstants'

export class WelcomeScreen extends Component {

  shouldComponentUpdate = (nextProps, nextState) => shallowCompare(this, nextProps, nextState)

  handleClick = () => {
  }

  render() {
    const isActive = this.props.dataReady
    const content = () => {
      return (
        <RaisedButton
          label={"Begin the journey!"}
          labelColor="white"
          disabled={!isActive}
          style={styles.button}
          onTouchTap={this.handleClick}
        />
      )
    }

    return (
      <div style={styles.root} >
        <div style={styles.shadow}>
          <div style={styles.box}>
            <h1 style={styles.header}>Welcome to {this.props.name}</h1>
            {content()}
          </div>
        </div>
      </div>
    )
  }
}

WelcomeScreen.propTypes = {
  dataReady: PropTypes.bool,
  name: PropTypes.string.isRequired,
  bundleId: PropTypes.string.isRequired
}
WelcomeScreen.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    dataReady: state.getIn(['ui', 'isInitialDataLoaded'], false),
    name: state.getIn(['appConfig', 'appName'], ''),
    bundleId: state.getIn(['appConfig', 'bundleId'], '')
  }
}

export const WelcomeScreenContainer = connect(
  mapStateToProps
)(WelcomeScreen)

const styles = {
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'darkGrey',
    fontFamily: 'ProximaNova',
  },
  shadow: {
    backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.3) 30%, transparent, transparent',
    backgroundPositionY: 'center',
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    maxWidth: 450,
    textAlign: 'center'
  },
  header: {
    display: 'block',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: 'white',
    fontWeight: 800,
    lineHeight: 1.4
  },
  button: {
    display: 'inline-block',
    marginTop:'20px',
    margin: 'auto',
    verticalAlign: 'middle',
    color: 'white',
    marginBottom: 10,
    backgroundColor: '#e3661e',
    borderRadius: 4
  }
}
