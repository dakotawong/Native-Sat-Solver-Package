# NPM Package: `Native-Addon-Sample-Package`

![Tests Passing](https://github.com/dakotawong/native-addon-sample-package/actions/workflows/npm-tests.yml/badge.svg?branch=main)
![Tests Passing](https://github.com/dakotawong/native-addon-sample-package/actions/workflows/npm-publish.yml/badge.svg?branch=main)

Native-Addon-Sample-Package is a NPM package that allows for a simple C++ library to be run in Node.js projects using [node-gyp](https://www.npmjs.com/package/node-gyp) The point of this package was to simply tests process of writing an NPM package using C++.

# Dependencies

## Linux & MacOS

- Python v3.7, v3.8, v3.9, or v3.10

## Windows

- Python v3.7, v3.8, v3.9, or v3.10
- Install Visual C++ Build Environment: [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) (using "Visual C++ build tools" workload) or [Visual Studio Community](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community) (using the "Desktop development with C++" workload)

## More Info

- For more info see the `node-gyp` dependencies ([click here](https://github.com/nodejs/node-gyp#installation)))


# Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install `Native-Addon-Sample-Package`.

```bash
npm i native-addon-sample-package
```

# Usage

```javascript
const addon = require('native-addon-sample-package')

// returns 'dog'
console.log(addon.once('dog'))

// returns 'cat cat'
console.log(addon.twice('cat'))

// returns 'bird bird bird'
console.log(addon.triple('bird'))
```

# Tests

This package uses Mocha for testing.
```bash
npm run test
```

# Local Builds

The package can be run locally after globally installing [node-gyp](https://www.npmjs.com/package/node-gyp).

```bash
node-gyp rebuild
```

# Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License

[MIT](https://choosealicense.com/licenses/mit/)