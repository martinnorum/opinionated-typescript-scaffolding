/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Hello_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("app"));
	// import React from 'react'
	// import ReactDOM from 'react-dom'
	// import {
	//   Router,
	//   hashHistory
	// } from 'react-router'
	//
	// import createMaterialUITheme from './bootstrap/createMaterialUITheme'
	// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
	//
	// import { Provider } from 'react-redux'
	//
	// import { fromJS } from 'immutable'
	//
	// import applicationStore from './applicationStore'
	//
	// import parseAppConfig from './utils/appConfig'
	// import { syncHistoryWithStore } from 'react-router-redux'
	//
	// import createRoutes from './Routes'
	//
	// import injectTapEventPlugin from 'react-tap-event-plugin'
	// injectTapEventPlugin()
	//
	// const initialState = fromJS({ "appConfig": parseAppConfig(window.location.search) })
	//
	// const store = applicationStore(
	//   initialState,
	//   hashHistory
	// )
	//
	// const history = syncHistoryWithStore(hashHistory, store, {
	//   selectLocationState (state) {
	//     return state.getIn(['routing']).toJS()
	//   }
	// })
	//
	// const routes = createRoutes(store)
	// ReactDOM.render(
	//   <Provider store={store}>
	//     <MuiThemeProvider muiTheme={createMaterialUITheme()}>
	//       <Router history={history}>{routes}</Router>
	//     </MuiThemeProvider>
	//   </Provider>,
	//   // Use class name so that old css is not outdated.
	//   // Would prefer to use ID instead
	//   document.getElementsByClassName('app')[0]
	// )


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        return React.createElement("h1", null, 
	            "Hello from ", 
	            this.props.compiler, 
	            " and ", 
	            this.props.framework, 
	            "!");
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map