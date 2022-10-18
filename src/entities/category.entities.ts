import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Property } from "./property.entities";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 50, type: "varchar", unique: true })
  name: string;

  @OneToMany((type) => Property, (property) => property.id)
  property?: Property[];
}
