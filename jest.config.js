/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  testTimeout: 20000,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  // Resolve Next.js / project path aliases (@/ -> src/)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

