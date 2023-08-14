# NPM Package: `Native-Sat-Solver-Package`

![Tests Passing](https://github.com/dakotawong/Native-Sat-Solver-Package/actions/workflows/npm-tests.yml/badge.svg?branch=main)
![Tests Passing](https://github.com/dakotawong/Native-Sat-Solver-Package/actions/workflows/npm-publish.yml/badge.svg?branch=main)

Native-Sat-Solver-Addon is a SAT Solver npm addon, written in C++ to complex Boolean satisfiability problems. This addon utilizes Tseitin's transformation, a transformation technique that efficiently converts logical formulas into Conjunctive Normal Form (CNF), a standard format for SAT solving. Once a formula is in CNF, it can then be efficiently solved using the DPLL (Davis-Putnam-Logemann-Loveland) algorithm. The goal of this addon is to provide a fast and efficient tool for solving satisfiability problems in popular JavaScript frameworks.

`Note:` Underly SAT Solver is based on another one of my repositories which can be found [here](https://github.com/dakotawong/SAT-Solver)

# Dependencies
The addon is dependent on [node-gyp](https://www.npmjs.com/package/node-gyp) which results in the following dependencies:
## Linux & MacOS

- Python v3.7, v3.8, v3.9, or v3.10

## Windows

- Python v3.7, v3.8, v3.9, or v3.10
- Install Visual C++ Build Environment: [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) (using "Visual C++ build tools" workload) or [Visual Studio Community](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community) (using the "Desktop development with C++" workload)

## More Info

- For more info see the `node-gyp` dependencies ([click here](https://github.com/nodejs/node-gyp#installation)))


# Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install `native-sat-solver-package`.

```bash
npm i native-sat-solver-package
```

# Usage
The SAT Solver will accept strings as input. These input strings are representative of boolean formulas and must adhere to the following rules.
## Rules
## Operators
1. `*`: represents the boolean AND operator
2. `+`: represents the boolean OR operator
3. `-`: represents the boolean NOT operator
## Order of Operations
The order of operations will be enforeced as follows with `1` being the higest order and `4` being the lowest order.
1. `(` or `)` (Paranthesis)
2. `-` (NOT)
3. `*` (AND)
4. `+` (OR)
## Grammar Rules
1. Variable names must start with a character of the alphabet (uppercase or lowercase)
2. Variable names can consist of letters and digits
3. Variable length must be less than 11 characters
4. Can use arbitrary amounts of whitespace between terms of the grammar
## Example Input Strings
Here are some examples input strings:
```
a+c
a*---a
 ( (-a)+(a*b)) * a * (c + -b) *-c
(a+b+c)*(a+b+-c)*(-b+a +c)*(-a*-c)
(a+b+c)*(a+b+-c)*(-b+a +c)*(a+-b+-c)*(-a+b+c)*(-a+b+-c)*(-a+-b+c)*(-a+-c+-c)
(a+b+c)*(a+b+-c)*(-b+a +c)*(a+-b+-c)*(-a+b+c)*(-a+b+-c)*(-a+-b+c)*(-a+-c+-b)
(a+b+c)*(a+b+-c)*(-b+a +c)*(a+-b+-c)*(-a+b+c)*(-a+b+-c)*(-a+-b+c)
VAr1 * -VAr1
VAr1 + -VAr1
 -((A*  B)+ C)
 (A+-B+C) * (B+C) * (-A+ C) * (B +-C) * -               (C)
(a1)*(-a1+a2) * (-a2+a3) *(-a3)
  (-B*-C * D) + (-B * -  D) + (C *D) + (B)         
(B+C+-D)  *(D+B)*(-C+-D)* (-B)
```
## Using the Addon

```javascript
const SAT = require('native-sat-solver-package')

// returns 'sat'
console.log(SAT.solve('Var1 + -Var1'))

// returns 'usat'
console.log(SAT.solve('a*---a'))

// returns 'unsat'
console.log(SAT.solve('(B+C+-D)*(D+B)*(-C+-D)*(-B)'))
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