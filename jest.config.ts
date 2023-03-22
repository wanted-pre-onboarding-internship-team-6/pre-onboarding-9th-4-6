import type {Config} from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['./jest.setup'],
};

export default config;