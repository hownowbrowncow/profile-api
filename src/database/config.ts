import { User } from '../users/entities/user.entity';

export const defaultConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'profile_api',
  entities: [User],
  synchronize: false,
};
