import { User as UserEntity } from '../../users/entities/user.entity';

export {};

declare global {
  namespace Express {
    interface User extends UserEntity {}
  }
}
