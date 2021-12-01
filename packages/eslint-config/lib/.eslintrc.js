module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import-newlines',
  ],
  rules: {
    // vanilla
    indent: [ 'error', 2 ],
    'max-len': [ 'error', 120 ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    } ],
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-console': [ 'warn', { allow: [ 'error', 'warn', 'info' ] } ],
    'function-paren-newline': [ 'error', 'multiline-arguments' ],
    'function-call-argument-newline': [ 'warn', 'always' ],
    'prefer-arrow-callback': [ 'error', { allowNamedFunctions: true } ],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 1 } ],
    'padding-line-between-statements': [ 'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      { blankLine: 'always', prev: 'singleline-const', next: 'multiline-const' },
      { blankLine: 'always', prev: 'multiline-const', next: 'multiline-const' },
      { blankLine: 'never', prev: 'singleline-const', next: 'singleline-const' },
    ],

    // typescript
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/consistent-type-imports': [ 'error' ],
    '@typescript-eslint/type-annotation-spacing': [ 'error', {
      before: false,
      after: true,
    } ],
    '@typescript-eslint/member-delimiter-style': [ 'error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    } ],

    // import
    'import/order': 'warn',
    'import/default': 'off',
    'import/newline-after-import': [ 'error', { count: 1 } ],
    'import/no-named-as-default': 'off',

    // import-newlines
    'import-newlines/enforce': [
      'error',
      {
        items: 3,
        'max-len': 120,
        semi: false,
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
    node: {
      extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
    },
  },
}
