import { EntitySchema, EntitySchemaColumnOptions } from 'typeorm';
import { Role } from '../auth/constants';

export interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new EntitySchema<UserType>({
  name: 'User',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp with time zone',
      createDate: true,
    },
    roles: {
      type: 'enum',
      enum: Role,
      array: true,
      default: [Role.User],
    } as EntitySchemaColumnOptions,
    updatedAt: {
      name: 'updated_at',
      type: 'timestamp with time zone',
      updateDate: true,
    },
  },
});
