module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-tabs': 0,
    indent: 0,
    // or
    'space-before-function-paren': ['error', {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
    }]
  }
}
