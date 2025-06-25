// .eslintrc.js
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': ['error', { semi: true, singleQuote: true }],
    },
}
