"use strict";
var react_1 = require('react');
var react_dom_1 = require('react-dom');
var react_router_1 = require('react-router');
var createMaterialUITheme_1 = require('./bootstrap/createMaterialUITheme');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
var react_redux_1 = require('react-redux');
var immutable_1 = require('immutable');
var applicationStore_1 = require('./applicationStore');
var appConfig_1 = require('./utils/appConfig');
var react_router_redux_1 = require('react-router-redux');
var Routes_1 = require('./Routes');
var react_tap_event_plugin_1 = require('react-tap-event-plugin');
react_tap_event_plugin_1["default"]();
var initialState = immutable_1.fromJS({ "appConfig": appConfig_1["default"](window.location.search) });
var store = applicationStore_1["default"](initialState, react_router_1.hashHistory);
var history = react_router_redux_1.syncHistoryWithStore(react_router_1.hashHistory, store, {
    selectLocationState: function (state) {
        return state.getIn(['routing']).toJS();
    }
});
var routes = Routes_1["default"](store);
react_dom_1["default"].render(<react_redux_1.Provider store={store}>
    <MuiThemeProvider_1["default"] muiTheme={createMaterialUITheme_1["default"]()}>
      <react_router_1.Router history={history}>{routes}</react_router_1.Router>
    </MuiThemeProvider_1["default"]>
  </react_redux_1.Provider>, 
// Use class name so that old css is not outdated.
// Would prefer to use ID instead
document.getElementsByClassName('app')[0]);
