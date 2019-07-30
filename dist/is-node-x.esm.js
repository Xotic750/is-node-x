import toBoolean from 'to-boolean-x';
import attempt from 'attempt-x';
var doc = typeof document === 'undefined' ? null : document;
var docHasChildNodes = doc ? doc.hasChildNodes : null;
var element = doc ? doc.createElement('div') : null;

var getDocInheritsNode = function getDocInheritsNode() {
  var result = attempt(function attemptee() {
    return docHasChildNodes.call(element);
  });
  return result.threw === false && typeof result.value === 'boolean';
};

var docInheritsNode = getDocInheritsNode();
var hasChildNodesFn = element && docInheritsNode === false ? element.hasChildNodes : docHasChildNodes;

var shouldTest = function shouldTest(value) {
  return toBoolean(hasChildNodesFn) && toBoolean(value) && typeof value.nodeType === 'number';
};

var hasChildNodes = function hasChildNodes(value) {
  var result = attempt.call(value, hasChildNodesFn);

  if (result.threw === false) {
    return typeof result.value === 'boolean';
  }

  return null;
};

var canAppendChild = function canAppendChild(value) {
  if (docInheritsNode === false) {
    var result = attempt(function attemptee() {
      return element.cloneNode(false).appendChild(value);
    });

    if (result.threw === false) {
      return toBoolean(result.value);
    }
  }

  return null;
};

var performTests = function performTests(value) {
  if (value === document) {
    return true;
  }

  var result1 = hasChildNodes(value);

  if (result1 !== null) {
    return result1;
  }

  var result2 = canAppendChild(value);

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
  if (shouldTest(value)) {
    var result = performTests(value);

    if (result !== null) {
      return result;
    }
  }

  return false;
};

export default isNode;

//# sourceMappingURL=is-node-x.esm.js.map