# eslint-config-productsway 👋

[![Version](https://img.shields.io/npm/v/eslint-config-productsway.svg)](https://www.npmjs.com/package/eslint-config-productsway)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Enhance your code quality with XO's ESLint config, further augmented with TypeScript and Prettier support.

[![IT Man - A Guide to Professional JavaScript &amp; TypeScript Development [Vietnamese]](https://i.ytimg.com/vi/FTG0rTnhjV8/hqdefault.jpg)](https://www.youtube.com/watch?v=FTG0rTnhjV8)

## Installation

```sh
npx install-peerdeps --dev eslint-config-productsway
```

## Usage

Create a `.eslintrc.cjs` file at the root of your project's directory.

For TypeScript projects:
```js
module.exports = {
  extends: ['productsway/typescript'],
};
```

For TypeScript and React projects:
```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['productsway/react'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  rules: {},
};
```

## Configuring the ESLint TypeScript Parser

If your project uses TypeScript, ensure to configure the ESLint TypeScript parser by specifying your `tsconfig.json` files in the `parserOptions.project` array:

```js
module.exports = {
  extends: ['productsway/typescript'], // or 'productsway/react' for TypeScript and React
  parserOptions: {
   project: ['./tsconfig.json', './tsconfig.node.json'], // include all your tsconfig.json files here
  }
};
```

## Executing ESLint

From your project's root directory, execute:

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx
```

For Vite React App, include .ts and .tsx extensions and report unused disable directives:

```sh
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
```

## Integration with Next.js

For Next.js projects, you can use the following configuration in your `.eslintrc.json` file:

```json
{
    "extends": ["productsway/react", "plugin:@next/next/recommended"]
}
```

Please note: You need to install `eslint-config-next` to use the recommended ESLint configuration for Next.js.

## Roadmap

-   [ ] Add [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) for sorting various entities (imports, types, enums, JSX props, etc.)
-   [ ] Extend support to Vue.js with [eslint-config-xo-vue](https://github.com/ChocPanda/eslint-config-xo-vue#use-with-xo).

## Tips

### Sorting Imports with Prettier Plugin

For consistent import ordering, utilize the [trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports#usage) plugin.

In your `.prettierrc.js` file:

```js
module.exports = {
  ...
  "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}
```

## Author

👤 **Huynh Duc Dung**

-   Website: https://productsway.com/
-   Twitter: [@jellydn](https://twitter.com/jellydn)
-   Github: [@jellydn](https://github.com/jellydn)

## Show Your Support

If this project assists you, give it a ⭐️!
