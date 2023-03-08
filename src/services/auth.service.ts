// src/services/auth.service.ts

import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export class AuthService {
  public async login(
    username: string,
    password: string
  ): Promise<User | undefined> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { username } });

    if (user && user.password === password) {
      return user;
    }

    return undefined;
  }
}
