import * as React from 'react'
import {connect} from 'react-redux'
import * as shallowCompare from 'react-addons-shallow-compare'
import RaisedButton from 'material-ui/RaisedButton'

interface WelcomeProps {
  dataReady: boolean
  name: string
  bundleId: string
}
interface WelcomeState {
  router: any
}

export class WelcomeScreen extends React.Component<WelcomeProps, WelcomeState> {
  static propTypes = {
    dataReady: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    bundleId: React.PropTypes.string.isRequired
  }
  static contextTypes = {
    router: React.PropTypes.object
  }
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
          onTouchTap={this.handleClick}
        />
      )
    }

    return (
      <div >
        <h1 >Welcome to {this.props.name}</h1>
        {content()}
      </div>
    )
  }
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
