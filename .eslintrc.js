module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
<<<<<<< HEAD
    'jest/globals': true,
=======
    jest: true,
>>>>>>> a37429b9662392bc9e8704907d641110c679bdc8
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
  },
};
