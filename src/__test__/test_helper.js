/*global global*/
import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import spies from 'chai-spies'
import chaiEnzyme from 'chai-enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

// Needed for onTouchTap
injectTapEventPlugin()

chai.use(chaiImmutable)
chai.use(spies)
chai.use(chaiEnzyme())
