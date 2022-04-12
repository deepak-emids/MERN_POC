import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

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
  @Column({ type: 'varchar', length: 200, default: '' })
  address: string;
  @Column({ type: 'int' })
  department_Id: number;
  @Column({ type: 'int' })
  role_Id: number;
  @Column({ type: 'int', default: null })
  mobileNo: number;
  @Column({ type: 'int' })
  aadharId: number;
  @Column({ type: 'date' })
  date_Of_Joining: Date;
  @Column({ type: 'boolean', default: true })
  isActive: boolean;
  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  public updated_at: Date;
}
