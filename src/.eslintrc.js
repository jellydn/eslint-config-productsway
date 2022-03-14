module.exports = {
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
