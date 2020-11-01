const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './.prettierrc'), 'utf8'),
);

module.exports = {
  root: true,
  extends: [
    'prettier',
    'prettier/react',
    'prettier/standard',
    '@react-native-community',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'prettier',
  ],
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
};
