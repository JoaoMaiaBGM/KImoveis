import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Address } from "./address.entities";
import { Category } from "./category.entities";
import { Schedules } from "./scheduleUsersProperties.entities";

@Entity("properties")
export class Property {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => Address, { eager: true })
  @JoinColumn()
  adress: Address;

  @OneToMany((type) => Schedules, (schedule) => schedule.property)
  schedules?: Schedules[];

  @ManyToOne((type) => Category, { eager: true })
  category: Category;
}
