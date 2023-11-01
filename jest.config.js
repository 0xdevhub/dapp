const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/app/utils/(.*)$': '<rootDir>/app/utils/$1'
  },
  modulePathIgnorePatterns: ['mocks'],
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
