const baseRules = {
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
};

module.exports = {
    extends: [
        'xo',
        'xo-typescript',
        'xo-react',
        'eslint-plugin-tsdoc',
        'prettier',
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        ...baseRules,
        'tsdoc/syntax': 'warn',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
