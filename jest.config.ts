// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
};
export default config;
