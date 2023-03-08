// src/controllers/auth.controller.ts

import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {
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

  public static async logout(req: Request, res: Response): Promise<void> {
    req.session.destroy(() => {
      res.sendStatus(200);
    });
  }
}
