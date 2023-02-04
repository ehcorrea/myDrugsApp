module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  preset: '@testing-library/react-native',
  setupFiles: ['<rootDir>/.jest/setup.tsx/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.ts/'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  transform: {
    '^.+\\.svg$': '<rootDir>/src/test/fileTransformer.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.styles.ts',
    '!**/node_modules/**',
    '!android/**',
    '!ios/**',
    '!src/@types/**',
    '!src/**/index.{ts,tsx}',
    '!src/config/**',
    '!src/test/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  clearMocks: true,
};
