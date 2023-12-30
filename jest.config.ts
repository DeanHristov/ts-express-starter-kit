import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/'],
  globals: {},
  moduleNameMapper: {},
  //   collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
  //   coverageThreshold: {
  //     global: {
  //       branches: 80,
  //       functions: 80,
  //       lines: 80,
  //       statements: 80,
  //     },
  //   },
};

export default jestConfig;
