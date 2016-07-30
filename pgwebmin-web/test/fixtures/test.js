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

	'use strict';
	
	/* Polyfills for phantomjs */
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-core/polyfill\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	/* Test spec files */
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Console-polyfill. MIT license.
	// https://github.com/paulmillr/console-polyfill
	// Make it safe to do console.log() always.
	(function(global) {
	  'use strict';
	  global.console = global.console || {};
	  var con = global.console;
	  var prop, method;
	  var empty = {};
	  var dummy = function() {};
	  var properties = 'memory'.split(',');
	  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
	     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
	     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
	  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
	})(typeof window === 'undefined' ? this : window);
	// Using `this` for web workers while maintaining compatibility with browser
	// targeted script loaders such as Browserify or Webpack where the only way to
	// get to the global object is via `window`.


/***/ },
/* 2 */
/***/ function(module, exports) {

	if (typeof Function.prototype.bind != 'function') {
	    Function.prototype.bind = function bind(obj) {
	        var args = Array.prototype.slice.call(arguments, 1),
	            self = this,
	            nop = function() {
	            },
	            bound = function() {
	                return self.apply(
	                    this instanceof nop ? this : (obj || {}), args.concat(
	                        Array.prototype.slice.call(arguments)
	                    )
	                );
	            };
	        nop.prototype = this.prototype || {};
	        bound.prototype = new nop();
	        return bound;
	    };
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	let MyFirstStore = __webpack_require__(4);
	let ACTION_TYPES = __webpack_require__(5);
	
	describe('Connection Store', () => {
	
		beforeEach(() => {
			/* Resets the state of your store, along with any mocked methods */
			ConnectionStore.TestUtils.reset();
		});
	
		it('should do something', () => {
			/* Your code here! */
		});
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	import { createStore } from 'redux';
	const ACTION_TYPES = __webpack_require__(5);
	
	/**
	 * Manage the connection
	 */
	function connection(state = [{
	  user: 'brad',
	  password: 'password1$',
	  database: 'brad',
	  host: 'localhost',
	  port: 5432
	}], action) {
	  switch (action.type) {
	    case ACTION_TYPES.GET_CONNECTIONS:
	      return state;
	    default:
	      return state;
	  }
	}
	
	// Create a Redux store holding the state of your app.
	// Its API is { subscribe, dispatch, getState }.
	let store = createStore(connection);
	
	// Log events on this store
	store.subscribe(() => console.log(store.getState()));

/***/ },
/* 5 */
/***/ function(module, exports) {

	var constants = {
	  GET_CONNECTIONS: "GET_CONNECTIONS"
	};
	
	export default constants;

/***/ }
/******/ ]);
//# sourceMappingURL=test.js.map