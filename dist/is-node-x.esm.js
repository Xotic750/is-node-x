/** @type {BooleanConstructor} */
var castBoolean = true.constructor;

var _ref = function init() {
  if (typeof document !== 'undefined') {
    try {
      var testElement = document.createElement('div');
      var _hasChildNodesFn = document.hasChildNodes;
      return {
        element: document.createElement('div'),
        hasChildNodes: document.hasChildNodes,
        documentInheritsNode: typeof _hasChildNodesFn.call(testElement) === 'boolean'
      };
    } catch (ignore) {// empty
    }
  }

  return {
    element: null,
    hasChildNodes: null,
    documentInheritsNode: false
  };
}(),
    documentInheritsNode = _ref.documentInheritsNode,
    element = _ref.element,
    hasChildNodes = _ref.hasChildNodes;

var hasChildNodesFn = element && documentInheritsNode === false ? element.hasChildNodes : hasChildNodes;
/**
 * This method tests if `value` is a DOM Node.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} True if a DOM Node, otherwise false.
 */

export default function isNode(value) {
  if (hasChildNodesFn && value && typeof value.nodeType === 'number') {
    if (value === document) {
      return true;
    }

    try {
      return typeof hasChildNodesFn.call(value) === 'boolean';
    } catch (ignore) {// empty
    }

    if (documentInheritsNode === false) {
      try {
        return castBoolean(element.cloneNode(false).appendChild(value));
      } catch (ignore) {// empty
      }
    }
  }

  return false;
}

//# sourceMappingURL=is-node-x.esm.js.map