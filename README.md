split-last
=============================
> Split the last separator of string.

[![NPM](https://nodei.co/npm/split-last.png)](https://nodei.co/npm/split-last/)

## Install

```
$ npm install split-last
```


## Example

```js
require("split-last");

console.log("192.168.0.1".splitLast("."));
//=> [ '192.168.0', '1' ]

console.log("http://www.abc.com/example/demo/web.html".splitLast("/"));
//=> [ 'http://www.abc.com/example/demo', 'web.html' ]
```

## License

This code is licensed under the MIT License.