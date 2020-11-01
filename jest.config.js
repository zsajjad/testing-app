module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./jest.mock.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        filename: 'jest.report.html',
        expand: true,
      },
    ],
  ],
};
