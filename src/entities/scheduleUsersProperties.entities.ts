import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Property } from "./property.entities";
import { User } from "./user.entities";

@Entity("schedule_users_properties")
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne((type) => User, { eager: true })
  user: User;

  @ManyToOne((type) => Property)
  property: Property;
}
