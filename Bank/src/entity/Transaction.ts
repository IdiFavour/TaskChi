import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  senderAccount: User;

  @OneToOne(() => User)
  @JoinColumn()
  recieveAccount: User;

  @Column()
  amount: number;
}
