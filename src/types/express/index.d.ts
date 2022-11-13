import { UserType } from '../../users/user.schema';

export {};

declare global {
  namespace Express {
    interface User extends UserType {}
  }
}
