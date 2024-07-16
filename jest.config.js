module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.jest.json'
      }
    }
};