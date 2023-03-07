import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Account } from "./entity/Account";
import { Transaction } from "./entity/Transaction";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Account, Transaction],
  migrations: [],
  subscribers: [],
});

export const createConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Initialized");
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
};
