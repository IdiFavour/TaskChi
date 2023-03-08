// src/controllers/auth.controller.ts

import { Response } from "express";
import { AuthService } from "../services/auth.service";
import { CustomRequest } from "../types";

export class AuthController {
  public static async login(req: CustomRequest, res: Response): Promise<void> {
    const authService = new AuthService();

    const { username, password } = req.body;

    const user = await authService.login(username, password);

    if (!user) {
      res.status(401).send("Invalid username or password");
      return;
    }

    req.session.userId = user.id;

    res.json(user);
  }

  public static async logout(req: CustomRequest, res: Response): Promise<void> {
    req.session.destroy(() => {
      res.sendStatus(200);
    });
  }
}
