
`weighted-random-file` pick a weighted random file, based on it's length.

 The longer the file is, the more often it will be chosen. A 4 kB file will be
 returned twice as often as a 2 kB file.

 Returns a Promise, so it's thenable.

## Install
```
$ npm install --save weighted-random-file
```

## Usage
```js
var weightedRandomFile = require("weighted-random-file");

weightedRandomFile(['one.txt', 'two.txt', 'three.txt'], __dirname); // "two.txt"
weightedRandomFile(['one.txt', 'two.txt', 'three.txt'], '/path/to/files'); // "two.txt"
```

## Parameters
* an array of relative paths
* base directory (optional, default is the location of `weighted-random-file`)

## Returns
A Promise of a string containing a relative path.
