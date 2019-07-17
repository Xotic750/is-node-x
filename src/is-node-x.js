/** @type {BooleanConstructor} */
const castBoolean = true.constructor;

const {documentInheritsNode, element, hasChildNodes} = (function init() {
  if (typeof document !== 'undefined') {
    try {
      const testElement = document.createElement('div');
      const hasChildNodesFn = document.hasChildNodes;

      return {
        element: document.createElement('div'),
        hasChildNodes: document.hasChildNodes,
        documentInheritsNode: typeof hasChildNodesFn.call(testElement) === 'boolean',
      };
    } catch (ignore) {
      // empty
    }
  }

  return {
    element: null,
    hasChildNodes: null,
    documentInheritsNode: false,
  };
})();

const hasChildNodesFn = element && documentInheritsNode === false ? element.hasChildNodes : hasChildNodes;

/**
 * This method tests if `value` is a DOM Node.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} True if a DOM Node, otherwise false.
 */
const isNode = function isNode(value) {
  if (hasChildNodesFn && value && typeof value.nodeType === 'number') {
    if (value === document) {
      return true;
    }

    try {
      return typeof hasChildNodesFn.call(value) === 'boolean';
    } catch (ignore) {
      // empty
    }

    if (documentInheritsNode === false) {
      try {
        return castBoolean(element.cloneNode(false).appendChild(value));
      } catch (ignore) {
        // empty
      }
    }
  }

  return false;
};

export default isNode;
