import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 50, type: "varchar" })
  district: string;

  @Column({ length: 8, type: "varchar" })
  zipCode: string;

  @Column({ length: 5, type: "varchar", nullable: true })
  number: string;

  @Column({ length: 50, type: "varchar" })
  city: string;

  @Column({ length: 2, type: "varchar" })
  state: string;
}
