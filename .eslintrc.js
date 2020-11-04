module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base"
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 2019
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'max-len': [
      "error",
      {
        "code": 150,
        "comments": 150
      }
    ]
  },
};
