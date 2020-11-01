// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierOptions = require('./.prettierrc');

module.exports = {
  root: true,
  extends: [
    'prettier',
    'prettier/react',
    'prettier/standard',
    '@react-native-community',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  env: {
    'jest/globals': true,
  },
};
