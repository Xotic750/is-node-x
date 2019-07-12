import isNode from '../src/is-node-x';

const itWindow = typeof window === 'undefined' ? xit : it;
const itGlobal = typeof global === 'undefined' ? xit : it;
const element = typeof document !== 'undefined' && document.createElement('div');
const itElement = element ? it : xit;
let hasSymbolSupport;
let symbol;

if (typeof Symbol === 'function') {
  /* eslint-disable-next-line compat/compat */
  symbol = Symbol('');
  hasSymbolSupport = typeof symbol === 'symbol';
}

const itSymbol = hasSymbolSupport ? it : xit;

const itMap = typeof Map === 'function' ? it : xit;
const itSet = typeof Set === 'function' ? it : xit;

const html4List = [
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
  'VAR',
];

const alwaysTrue = function() {
  return true;
};

const alwaysFalse = function() {
  return false;
};

const falsey = new Array(7);
falsey[1] = null;
falsey[2] = undefined;
falsey[3] = false;
falsey[4] = 0;
falsey[5] = NaN;
falsey[6] = '';

describe('isNode', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isNode).toBe('function');
  });

  itWindow('should return `false` for window', function() {
    expect.assertions(1);
    expect(isNode(window)).toBe(false);
  });

  itGlobal('should return `false` for global', function() {
    expect.assertions(1);
    expect(isNode(global)).toBe(false);
  });

  itElement('should return `true` for document', function() {
    expect.assertions(1);
    expect(isNode(document)).toBe(true);
  });

  itElement('should return `true` for HTML4 DOM elements', function() {
    expect.assertions(1);
    const expected = html4List.map(alwaysTrue);
    const actual = html4List.map(function(tag) {
      return isNode(document.createElement(tag));
    });

    expect(actual).toStrictEqual(expected);
  });

  itElement('should return `true` for DOM comments', function() {
    expect.assertions(1);
    const comment = document.createComment('Hello');
    expect(isNode(comment)).toBe(true);
  });

  itElement('should return `true` for DOM text nodes', function() {
    expect.assertions(1);
    const textNode = document.createTextNode('Hello');
    expect(isNode(textNode)).toBe(true);
  });

  itElement('should return `true` for DOM document fragments', function() {
    expect.assertions(1);
    const fragment = document.createDocumentFragment();
    expect(isNode(fragment)).toBe(true);
  });

  it('should return `false` for other non-DOM objects', function() {
    expect.assertions(9);
    /* eslint-disable-next-line prefer-rest-params */
    expect(isNode(arguments)).toBe(false, 'arguments');
    expect(isNode([])).toBe(false, 'Literal array');
    expect(isNode(new Array(6))).toBe(false, 'new Array');
    expect(isNode(Error)).toBe(false, 'Error constructor');
    expect(isNode(Math)).toBe(false, 'Math object');
    expect(isNode(/regex/)).toBe(false, 'Regex');
    /* eslint-disable-next-line lodash/prefer-noop */
    expect(isNode(function() {})).toBe(false, 'Function');
    expect(isNode(new Date())).toBe(false, 'Date');
    expect(isNode({nodeType: 1})).toBe(false, 'Fake');
  });

  it('should return `false` for non-DOM objects', function() {
    expect.assertions(3);
    const expected = falsey.map(alwaysFalse);

    const actual = falsey.map(function(value, index) {
      return index ? isNode(value) : isNode();
    });

    expect(actual).toStrictEqual(expected);

    expect(isNode(true)).toBe(false);
    expect(isNode('a')).toBe(false);
  });

  itMap('should return `false` for Map', function() {
    expect.assertions(1);
    /* eslint-disable-next-line compat/compat */
    expect(isNode(new Map())).toBe(false);
  });

  itSet('should return `false` for Set', function() {
    expect.assertions(1);
    /* eslint-disable-next-line compat/compat */
    expect(isNode(new Set())).toBe(false);
  });

  itSymbol('should return `false` for symbols', function() {
    expect(isNode(symbol)).toBe(false, 'Literal');
    expect(isNode(Object(symbol))).toBe(false, 'Object');
  });

  /*
  itRealm('should work with objects from another realm', function () {
    expect(isNode(realm.object)).toBe(true);
  });
  */
});
