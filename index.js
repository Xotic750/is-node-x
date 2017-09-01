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
