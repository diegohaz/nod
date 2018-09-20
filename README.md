# nod

[![NPM version](https://img.shields.io/npm/v/generator-nod.svg?style=flat-square)](https://npmjs.org/package/generator-nod)
[![Build Status](https://img.shields.io/travis/diegohaz/nod/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/nod) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/nod/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/nod/branch/master)

NodeJS module generator/boilerplate.

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3068563/21958520/77e4f45e-da97-11e6-9685-fe380a9cce3d.gif"></p>

## Features

-   [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
-   [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
-   [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
-   [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
-   [**Flow**](https://flowtype.org/) - A static type checker for JavaScript used heavily within Facebook.
-   [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request.
-   [**Documentation**](http://documentation.js.org/) - A documentation system so good, you'll actually write documentation.
-   [**Conventional Changelog**](https://github.com/conventional-changelog/conventional-changelog) - Generate a changelog from git metadata.

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
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # generate docs and transpile code
```

### Publish

```sh
$ npm version patch|minor|major
$ npm publish
```

It'll automatically run `test`, `lint`, `docs`, `build` and generate CHANGELOG.md file.

## Removing stuff

<details><summary><strong>Flow</strong></summary>

1. Remove `.flowconfig` file.

2. Remove `flow` from `package.json`:

    ```diff
      "scripts": {
    -   "flow": "flow check",
    -   "flowbuild": "flow-copy-source src dist",
    -   "prebuild": "npm run docs && npm run clean && npm run flowbuild",
    +   "prebuild": "npm run docs && npm run clean",
      },
      "devDependencies": {
    -   "@babel/preset-flow": "^7.0.0",
    -   "eslint-plugin-flowtype": "^2.50.0",
    -   "eslint-plugin-flowtype-errors": "^3.5.1",
    -   "flow-bin": "^0.81.0",
    -   "flow-copy-source": "^2.0.2",
      }
    ```

3. Remove `flow` from `.babelrc`:

    ```diff
      "presets": [
    -   "@babel/preset-flow"
      ]
    ```
    
4. Remove `flow` from `.eslintrc`:

    ```diff
      "extends": [
    -   "plugin:flowtype/recommended",
    -   "prettier/flowtype"
      ],
      "plugins": [
    -   "flowtype",
    -   "flowtype-errors"
      ],
      "rules": {
    -   "flowtype-errors/show-errors": "error"
      }
    ```

5. Run `yarn`.

</details>

<details><summary><strong>Documentation</strong></summary>

1. Remove `documentation` from `package.json`:

    ```diff
      "scripts": {
    -   "docs": "documentation readme src --section=API",
    -   "postdocs": "git add README.md",
    -   "prebuild": "npm run docs && npm run clean",
    +   "prebuild": "npm run clean",
      },
      "devDependencies": {
    -   "documentation": "^8.0.0",
      }
    ```

2. Run `yarn`.

</details>

## Adding stuff

<details><summary><strong>TypeScript</strong></summary>
  
1. Install dependencies:

    ```sh
    yarn add -D @babel/preset-typescript @types/jest eslint-import-resolver-typescript eslint-plugin-typescript jest-config typescript typescript-eslint-parser
    ```
    
2. Update `package.json`:

    ```diff
    + "types": "dist/ts",
      "scripts": {
    +   "type-check": "tsc --noEmit",
    -   "lint": "eslint .",
    +   "lint": "eslint . --ext js,ts,tsx",
    -   "build": "babel src -d dist",
    +   "build": "tsc --emitDeclarationOnly && babel src -d dist -x .js,.ts,.tsx",
      },
      "lint-staged": {
        "*.js": [
    -     "eslint --fix",
    +     "eslint --fix --ext js,ts,tsx",
          "git add"
        ]
      }
    ```

3. Create `tsconfig.json`

    ```json
    {
      "compilerOptions": {
        "outDir": "dist/ts",
        "target": "esnext",
        "module": "esnext",
        "moduleResolution": "node",
        "jsx": "react",
        "strict": true,
        "declaration": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitReturns": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "stripInternal": true
      },
      "include": [
        "src"
      ]
    }
    ```
    
4. Update `.babelrc`:

    ```diff
      "presets": [
    +   "@babel/preset-typescript"
      ]
    ```
    
5. Update `.eslintrc` with these settings:

    ```diff
      "settings": {
        "import/resolver": {
          "node": true,
          "eslint-import-resolver-typescript": true
        }
      },
      "overrides": [
        {
          "files": ["**/*.ts", "**/*.tsx"],
          "parser": "typescript-eslint-parser",
          "plugins": [
            "typescript"
          ],
          "rules": {
            "no-undef": "off",
            "no-unused-vars": "off",
            "no-restricted-globals": "off"
          }
        }
      ]
    ```
    
6. Create `jest.config.js`:

    ```js
    const { defaults } = require("jest-config");

    module.exports = {
      moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
      testMatch: ["**/?(*.)+(spec|test).(j|t)s?(x)"],
      transform: {
        "\\.(j|t)sx?$": "babel-jest"
      }
    };
    ```
    
7. Run `yarn`.
  
</details>

## License

MIT © [Diego Haz](https://github.com/diegohaz)
