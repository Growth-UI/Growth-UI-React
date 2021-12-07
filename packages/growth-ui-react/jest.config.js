module.exports = {
  rootDir: '.',
  cacheDirectory: '.jest-cache',
  // The directory where Jest should output its coverage files
  coverageDirectory: '.jest-coverage',
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['**/*.{js,jsx,mjs,ts,tsx}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
};
