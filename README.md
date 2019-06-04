
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

## Contributing
I appreciate your issues and PRs [on Github](https://github.com/misund/weighted-random-file)!

### Testing
```
yarn build && yarn test
```

### Releasing
This project uses [np](https://github.com/sindresorhus/np).
1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide
