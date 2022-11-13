import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Bio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  info: string;

  @Column()
  displayName: string;

  @Column()
  title: string;

  @Column()
  picture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
