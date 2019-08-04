/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-08-04T19:05:39.933Z",
  "describe": "",
  "description": "Tests if a value is a DOM Node.",
  "file": "is-node-x.js",
  "hash": "0b0a34e8c1b255c99c67",
  "license": "MIT",
  "version": "2.0.23"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isNodeX"] = factory();
	else
		root["isNodeX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ var to_boolean_x_esm = (toBoolean);


// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
var attempt = function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ var attempt_x_esm = (attempt);


// CONCATENATED MODULE: ./dist/is-node-x.esm.js


var doc = typeof document === 'undefined' ? null : document;
var docHasChildNodes = doc ? doc.hasChildNodes : null;
var is_node_x_esm_element = doc ? doc.createElement('div') : null;

var is_node_x_esm_getDocInheritsNode = function getDocInheritsNode() {
  var result = attempt_x_esm(function attemptee() {
    return docHasChildNodes.call(is_node_x_esm_element);
  });
  return result.threw === false && typeof result.value === 'boolean';
};

var docInheritsNode = is_node_x_esm_getDocInheritsNode();
var hasChildNodesFn = is_node_x_esm_element && docInheritsNode === false ? is_node_x_esm_element.hasChildNodes : docHasChildNodes;

var is_node_x_esm_shouldTest = function shouldTest(value) {
  return to_boolean_x_esm(hasChildNodesFn) && to_boolean_x_esm(value) && typeof value.nodeType === 'number';
};

var is_node_x_esm_hasChildNodes = function hasChildNodes(value) {
  var result = attempt_x_esm.call(value, hasChildNodesFn);

  if (result.threw === false) {
    return typeof result.value === 'boolean';
  }

  return null;
};

var is_node_x_esm_canAppendChild = function canAppendChild(value) {
  if (docInheritsNode === false) {
    var result = attempt_x_esm(function attemptee() {
      return is_node_x_esm_element.cloneNode(false).appendChild(value);
    });

    if (result.threw === false) {
      return to_boolean_x_esm(result.value);
    }
  }

  return null;
};

var performTests = function performTests(value) {
  if (value === document) {
    return true;
  }

  var result1 = is_node_x_esm_hasChildNodes(value);

  if (result1 !== null) {
    return result1;
  }

  var result2 = is_node_x_esm_canAppendChild(value);

  if (result2 !== null) {
    return result1;
  }

  return null;
};
/**
 * This method tests if `value` is a DOM Node.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} True if a DOM Node, otherwise false.
 */


var isNode = function isNode(value) {
  if (is_node_x_esm_shouldTest(value)) {
    var result = performTests(value);

    if (result !== null) {
      return result;
    }
  }

  return false;
};

/* harmony default export */ var is_node_x_esm = __webpack_exports__["default"] = (isNode);



/***/ })
/******/ ]);
});
//# sourceMappingURL=is-node-x.js.map