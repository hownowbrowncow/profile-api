import { EntitySchema } from 'typeorm';

export interface UserType {
  id: string;
  name: string;
  password: string;
}

export const UserSchema = new EntitySchema<UserType>({
  name: 'User',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
});
