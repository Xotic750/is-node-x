<a
  href="https://travis-ci.org/Xotic750/is-node-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-node-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-node-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-node-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-node-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-node-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-node-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-node-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-node-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-node-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-node-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-node-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-node-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-node-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-node-x"></a>

## is-node-x
Tests if a value is a DOM Node.
 
<a name="exp_module_is-node-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏
This method tests if `value` is a DOM Node.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - True if a DOM Node, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

**Example**  
```js
import isNode from 'is-node-x';

console.log(isNode()); // => false
console.logisNode({ nodeType: 1 })); // => false
console.logisNode(document)); // => true
console.logisNode(document.createNode('div')); // => true
```
