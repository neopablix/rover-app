module.exports = {
  name: 'Rover app',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^@Components(.*)$': '<rootDir>/components$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/pages'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
