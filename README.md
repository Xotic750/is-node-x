<a href="https://travis-ci.org/Xotic750/is-node-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/is-node-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-node-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-node-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-node-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-node-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-node-x" title="npm version">
<img src="https://badge.fury.io/js/is-node-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_is-node-x"></a>

## is-node-x
Tests if a value is a DOM Node.

**Version**: 1.0.2  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
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
var isNode = require('is-node-x');

isNode(); // => false
isNode({ nodeType: 1 }); // => false
isNode(document); // => true
isNode(document.createNode('div')); // => true
```
