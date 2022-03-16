import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeDetails {
  @PrimaryGeneratedColumn()
  employeeId: number;
  @Column({ type: "varchar", length: 80 })
  firstName: string;
  @Column({ type: "varchar", length: 80 })
  lastName: string;
  @Column({ type: "varchar", length: 80 })
  email: string;
  @Column({ type: "varchar", length: 15 })
  gender: string;
  @Column({ type: "date" })
  date_of_birth: Date;
  @Column({ type: "varchar", length: 80 })
  address: string;
  @Column({ type: "varchar", length: 80 })
  city: string;
  @Column({ type: "varchar", length: 80 })
  country: string;
  @Column({ type: "int" })
  mobileNo: number;
  @Column({ type: "int" })
  aadharId: number;
}
