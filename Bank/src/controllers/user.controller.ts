// src/controllers/user.controller.ts

import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CustomRequest } from "../types";

export class UserController {
  public static async create(req: Request, res: Response): Promise<void> {
    const userService = new UserService();

    const { username, password } = req.body;

    const user = await userService.create(username, password);

    res.json(user);
  }

  public static async getBalance(
    req: CustomRequest,
    res: Response
  ): Promise<void> {
    const userService = new UserService();

    const userId = req.session.userId;

    const user = await userService.getById(userId);

    res.json({ balance: user.balance });
  }

  public static async updateBalance(
    req: CustomRequest,
    res: Response
  ): Promise<void> {
    const userService = new UserService();

    const userId = req.session.userId;
    const amount = req.body.amount;

    const user = await userService.updateBalance(userId, amount);

    res.json({ balance: user.balance });
  }
}
