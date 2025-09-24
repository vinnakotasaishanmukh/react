module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'no-whitespace-before-property': 'warn',
    'eqeqeq': 'warn'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
};
