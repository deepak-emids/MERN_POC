import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 80 })
  departmentName: string;
}
