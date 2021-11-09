module.exports = {
    globals: {
        React: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'react/prop-types': 'off',
        'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
        'react/jsx-max-props-per-line': [ 'error', { maximum: 1 } ],
        'react/jsx-curly-spacing': [ 'error', 'never' ],
        'react/jsx-boolean-value': [ 'error', 'never' ],
        'react/jsx-one-expression-per-line': [ 'error' ],
        'react/jsx-tag-spacing': [ 'error', {
            closingSlash: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'always',
        } ],
        'react/jsx-wrap-multilines': [ 'error', {
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens',
        } ],
        'react/destructuring-assignment': [ 'warn' ],
        'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
        'react/jsx-no-useless-fragment': [ 'error' ],
        'react/self-closing-comp': [ 'error' ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
