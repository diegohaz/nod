# nod

[![NPM version](https://img.shields.io/npm/v/generator-nod.svg?style=flat-square)](https://npmjs.org/package/ggenerator-nod)
[![Build Status](https://img.shields.io/travis/diegohaz/nod/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/nod) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/nod/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/nod/branch/master)

NodeJS module generator/boilerplate.

## Features

- [**Babel**](https://babeljs.io/) - Write next generation JavaScript today;
- [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook;
- [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code;
- [**Flow**](https://flowtype.org/) - A static type checker for JavaScript used heavily within Facebook;
- [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request;
- [**Documentation**](http://documentation.js.org/) - A documentation system so good, you'll actually write documentation.

## Install

The easiest way to use **nod** is through the Yeoman Generator.

```sh
$ npm install -g yo generator-nod
$ yo nod
```
    
If you don't want to use the generator, you can also download or `git clone` this repo

```sh 
$ git clone https://github.com/diegohaz/nod my-module
$ cd my-module
$ rm -rf .git
$ npm install # or yarn
```
    
Just make sure to edit `package.json`, `README.md` and `LICENSE` files accordingly with your module's info.

## Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # transpile code to ES5
$ npm run patch # bump patch version and publish to npm e.g. 0.0.1
$ npm run minor # bump minor version and publish to npm e.g. 0.1.0
$ npm run major # bump major version and publish to npm e.g. 1.0.0
```

## License

MIT © [Diego Haz](https://github.com/diegohaz)
