module.exports = {
    extends: ['xo', 'xo-typescript', 'xo-react', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
