import { UserSchema } from '../users/user.schema';

export const defaultConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'profile_api',
  entities: [UserSchema],
  migrations: ['migrations/**/*.ts'],
  synchronize: false,
};
