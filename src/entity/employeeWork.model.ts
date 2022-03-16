import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeWorkDetails {
  @PrimaryGeneratedColumn()
  employeeId: number;
  @Column({ type: 'varchar', length: 80 })
  email: string;
  @Column({ type: 'varchar', length: 80 })
  password: string;
  @Column({ type: 'varchar', length: 80 })
  education: string;
  @Column({ type: 'int' })
  experiance: number;
  @Column({ type: 'varchar', length: 80 })
  department: string;
  @Column({ type: 'varchar', length: 15 })
  role: string;
  @Column({ type: 'varchar', length: 80 })
  designation: string;
  @Column({ type: 'varchar', length: 80 })
  reporting_lead: string;
  @Column({ type: 'int' })
  package: number;
  @Column({ type: 'date' })
  joining: Date;
}
