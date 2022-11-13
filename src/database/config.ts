import { User } from '../users/entities/user.entity';
import { Bio } from '../bios/entities/bio.entity';

export const defaultConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'profile_api',
  entities: [User, Bio],
  synchronize: false,
};
