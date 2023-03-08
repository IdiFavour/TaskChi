// src/database/seeds/01-create-default-user.ts

import { getRepository } from "typeorm";
import { User } from "../../models/user.model";

export class CreateDefaultUser1629703626454 {
  public async up(): Promise<void> {
    const userRepository = getRepository(User);

    const defaultUser = new User();
    defaultUser.username = "user1";
    defaultUser.password = "password1";
    defaultUser.balance = 1000;

    await userRepository.save(defaultUser);
  }

  public async down(): Promise<void> {
    // Do nothing
  }
}
