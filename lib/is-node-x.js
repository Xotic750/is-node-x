(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * @file Tests if a value is a DOM Node.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-node-x
 */

'use strict';

var documentIsDefined = typeof document !== 'undefined';
var documentInheritsNode = false;
var element;
var hasChildNodes;
if (documentIsDefined) {
  try {
    element = document.createElement('div');
    hasChildNodes = document.hasChildNodes;
    documentInheritsNode = typeof hasChildNodes.call(element) === 'boolean';
  } catch (ignore) {
    hasChildNodes = null;
    documentInheritsNode = false;
  }
}

if (element && documentInheritsNode === false) {
  hasChildNodes = element.hasChildNodes;
}

/**
 * This method tests if `value` is a DOM Node.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} True if a DOM Node, otherwise false.
 * @example
 * var isNode = require('is-node-x');
 *
 * isNode(); // => false
 * isNode({ nodeType: 1 }); // => false
 * isNode(document); // => true
 * isNode(document.createNode('div')); // => true
 */
module.exports = function isNode(value) {
  if (hasChildNodes && value && typeof value.nodeType === 'number') {
    if (value === document) {
      return true;
    }

    try {
      return typeof hasChildNodes.call(value) === 'boolean';
    } catch (ignore) {}

    if (documentInheritsNode === false) {
      try {
        return Boolean(element.cloneNode(false).appendChild(value));
      } catch (ignore) {}
    }
  }

  return false;
};

},{}]},{},[1])(1)
});