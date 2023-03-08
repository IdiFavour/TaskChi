// src/controllers/home.controller.ts

import { Request, Response } from "express";

export class HomeController {
  public static index(req: Request, res: Response): void {
    res.send("Welcome to the banking system");
  }
}
