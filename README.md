# Welcome to eslint-config-productsway 👋

[![Version](https://img.shields.io/npm/v/eslint-config-productsway.svg)](https://www.npmjs.com/package/eslint-config-productsway)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> XO's ESLint config with TypeScript and Prettier support

## Install

```sh
npx install-peerdeps --dev eslint-config-productsway
```

## Usage

Create a `.eslintrc.cjs` file in the root of your project's directory. If you are working with TypeScript, use the following configuration:

```sh
module.exports = {
  extends: ['productsway/typescript'],
};
```

If you are working with TypeScript and React, use the following configuration:

```sh
module.exports = {
  extends: ['productsway/react'],
};
```

## Configure the ESLint TypeScript parser

If your project has a TypeScript configuration, you need to configure the ESLint TypeScript parser. Include the path to your `tsconfig.json` file(s) in the `parserOptions.project` array, like so:

```sh
module.exports = {
  extends: ['productsway/typescript'], // or 'productsway/react' for TypeScript and React
  parserOptions: {
   project: ['./tsconfig.json', './tsconfig.node.json'], // include all your tsconfig.json files here
  }
};
```

## Run ESLint

Open a terminal to the root of your project, and run the following command:

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx
```

## Author

👤 **Huynh Duc Dung**

-   Website: https://productsway.com/
-   Twitter: [@jellydn](https://twitter.com/jellydn)
-   Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!
