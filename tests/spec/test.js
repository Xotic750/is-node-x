'use strict';

var isNode;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isNode = require('../../index.js');
} else {
  isNode = returnExports;
}

var itWindow = typeof window === 'undefined' ? xit : it;
var itGlobal = typeof global === 'undefined' ? xit : it;

var element = typeof document !== 'undefined' && document.createElement('div');
var itElement = element ? it : xit;

var hasSymbolSupport;
var symbol;
if (typeof Symbol === 'function') {
  symbol = Symbol('');
  hasSymbolSupport = typeof symbol === 'symbol';
}
var itSymbol = hasSymbolSupport ? it : xit;

var itMap = typeof Map === 'function' ? it : xit;
var itSet = typeof Set === 'function' ? it : xit;

var html4List = [
  'A',
  'ABBR',
  'ACRONYM',
  'ADDRESS',
  'APPLET',
  'AREA',
  'B',
  'BASE',
  'BASEFONT',
  'BDO',
  'BIG',
  'BLOCKQUOTE',
  'BODY',
  'BR',
  'BUTTON',
  'CAPTION',
  'CENTER',
  'CITE',
  'CODE',
  'COL',
  'COLGROUP',
  'DD',
  'DEL',
  'DFN',
  'DIR',
  'DIV',
  'DL',
  'DT',
  'EM',
  'FIELDSET',
  'FONT',
  'FORM',
  'FRAME',
  'FRAMESET',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'HEAD',
  'HR',
  'HTML',
  'I',
  'IFRAME',
  'IMG',
  'INPUT',
  'INS',
  'ISINDEX',
  'KBD',
  'LABEL',
  'LEGEND',
  'LI',
  'LINK',
  'MAP',
  'MENU',
  'META',
  'NOFRAMES',
  'NOSCRIPT',
  'OBJECT',
  'OL',
  'OPTGROUP',
  'OPTION',
  'P',
  'PARAM',
  'PRE',
  'Q',
  'S',
  'SAMP',
  'SCRIPT',
  'SELECT',
  'SMALL',
  'SPAN',
  'STRIKE',
  'STRONG',
  'STYLE',
  'SUB',
  'SUP',
  'TABLE',
  'TBODY',
  'TD',
  'TEXTAREA',
  'TFOOT',
  'TH',
  'THEAD',
  'TITLE',
  'TR',
  'TT',
  'U',
  'UL',
  'VAR'
];

var alwaysTrue = function () {
  return true;
};

var alwaysFalse = function () {
  return false;
};

var falsey = new Array(7);
falsey[1] = null;
falsey[2] = undefined;
falsey[3] = false;
falsey[4] = 0;
falsey[5] = NaN;
falsey[6] = '';

describe('isNode', function () {
  it('is a function', function () {
    expect(typeof isNode).toBe('function');
  });

  itWindow('should return `false` for window', function () {
    expect(isNode(window)).toBe(false);
  });

  itGlobal('should return `false` for global', function () {
    expect(isNode(global)).toBe(false);
  });

  itElement('should return `true` for document', function () {
    expect(isNode(document)).toBe(true);
  });

  itElement('should return `true` for HTML4 DOM elements', function () {
    var expected = html4List.map(alwaysTrue);
    var actual = html4List.map(function (tag) {
      return isNode(document.createElement(tag));
    });

    expect(actual).toEqual(expected);
  });

  itElement('should return `true` for DOM comments', function () {
    var comment = document.createComment('Hello');
    expect(isNode(comment)).toBe(true);
  });

  itElement('should return `true` for DOM text nodes', function () {
    var textNode = document.createTextNode('Hello');
    expect(isNode(textNode)).toBe(true);
  });

  itElement('should return `true` for DOM document fragments', function () {
    var fragment = document.createDocumentFragment();
    expect(isNode(fragment)).toBe(true);
  });

  it('should return `false` for other non-DOM objects', function () {
    expect(isNode(arguments)).toBe(false, 'arguments');
    expect(isNode([])).toBe(false, 'Literal array');
    expect(isNode(new Array(6))).toBe(false, 'new Array');
    expect(isNode(Error)).toBe(false, 'Error constructor');
    expect(isNode(Math)).toBe(false, 'Math object');
    expect(isNode(/regex/)).toBe(false, 'Regex');
    expect(isNode(function () {})).toBe(false, 'Function');
    expect(isNode(new Date())).toBe(false, 'Date');
    expect(isNode({ nodeType: 1 })).toBe(false, 'Fake');
  });

  it('should return `false` for non-DOM objects', function () {
    var expected = falsey.map(alwaysFalse);

    var actual = falsey.map(function (value, index) {
      return index ? isNode(value) : isNode();
    });

    expect(actual).toEqual(expected);

    expect(isNode(true)).toBe(false);
    expect(isNode('a')).toBe(false);
  });

  itMap('should return `false` for Map', function () {
    expect(isNode(new Map())).toBe(false);
  });

  itSet('should return `false` for Set', function () {
    expect(isNode(new Set())).toBe(false);
  });

  itSymbol('should return `false` for symbols', function () {
    expect(isNode(symbol)).toBe(false, 'Literal');
    expect(isNode(Object(symbol))).toBe(false, 'Object');
  });

  /*
  itRealm('should work with objects from another realm', function () {
    expect(isNode(realm.object)).toBe(true);
  });
  */
});
