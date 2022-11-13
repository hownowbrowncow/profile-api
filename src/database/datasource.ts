import { DataSource, DataSourceOptions } from 'typeorm';

import { defaultConfig } from './config';

export default new DataSource({
  ...defaultConfig,
  migrations: ['migrations/**/*.ts'],
} as DataSourceOptions);
