import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeDetails {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 80 })
  firstName: string;
  @Column({ type: 'varchar', length: 80 })
  lastName: string;
  @Column({ type: 'varchar', length: 80 })
  email: string;
  @Column({ type: 'varchar', length: 80 })
  password: string;
  @Column({ type: 'varchar', length: 200 })
  address: string;
  @Column({ type: 'int' })
  department_Id: number;
  @Column({ type: 'int' })
  role_Id: number;
  @Column({ type: 'int' })
  mobileNo: number;
  @Column({ type: 'int' })
  aadharId: number;
  @Column({ type: 'date' })
  date_Of_Joining: Date;
}
