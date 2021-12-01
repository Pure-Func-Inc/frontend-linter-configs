module.exports = {
  globals: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest',
  ],
  "settings": {
    "jest": {
      "version": 27
    }
  }
}
