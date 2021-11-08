module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': [ 'error', 120 ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'array-bracket-spacing': [ 'error', 'always' ],
  },
}
