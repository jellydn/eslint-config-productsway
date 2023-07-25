module.exports = {
    extends: ['xo', 'xo-typescript', 'xo-react', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {},
    settings: {
        react: {
            version: 'detect',
        },
    },
};
