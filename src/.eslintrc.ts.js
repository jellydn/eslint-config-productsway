module.exports = {
    extends: ['xo', 'xo-typescript', 'prettier'],
    plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        'tsdoc/syntax': 'warn',
    },
};
