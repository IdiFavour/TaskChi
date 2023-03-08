// src/services/user.service.ts

import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export class UserService {
  public async create(username: string, password: string): Promise<User> {
    const userRepository = getRepository(User);

    const user = new User();
    user.username = username;
    user.password = password;

    await userRepository.save(user);

    return user;
  }

  public async getById(userId): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(userId);

    return user;
  }

  public async updateBalance(userId, amount: number): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(userId);

    user.balance += amount;

    await userRepository.save(user);

    return user;
  }
}
