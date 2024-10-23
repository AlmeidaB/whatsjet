import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  message: string;

  @Column({ type: 'varchar' })
  status: string;

  @CreateDateColumn()
  created_at: Date;
}
