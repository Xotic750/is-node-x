import toBoolean from 'to-boolean-x';
import attempt from 'attempt-x';

const doc = typeof document === 'undefined' ? null : document;
const docHasChildNodes = doc ? doc.hasChildNodes : null;
const element = doc ? doc.createElement('div') : null;

const getDocInheritsNode = function getDocInheritsNode() {
  const result = attempt(function attemptee() {
    return docHasChildNodes.call(element);
  });

  return result.threw === false && typeof result.value === 'boolean';
};

const docInheritsNode = getDocInheritsNode();
const hasChildNodesFn = element && docInheritsNode === false ? element.hasChildNodes : docHasChildNodes;

const shouldTest = function shouldTest(value) {
  return toBoolean(hasChildNodesFn) && toBoolean(value) && typeof value.nodeType === 'number';
};

const hasChildNodes = function hasChildNodes(value) {
  const result = attempt.call(value, hasChildNodesFn);

  if (result.threw === false) {
    return typeof result.value === 'boolean';
  }

  return null;
};

const canAppendChild = function canAppendChild(value) {
  if (docInheritsNode === false) {
    const result = attempt(function attemptee() {
      return element.cloneNode(false).appendChild(value);
    });

    if (result.threw === false) {
      return toBoolean(result.value);
    }
  }

  return null;
};

const performTests = function performTests(value) {
  if (value === document) {
    return true;
  }

  const result1 = hasChildNodes(value);

  if (result1 !== null) {
    return result1;
  }

  const result2 = canAppendChild(value);

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
const isNode = function isNode(value) {
  if (shouldTest(value)) {
    const result = performTests(value);

    if (result !== null) {
      return result;
    }
  }

  return false;
};

export default isNode;
