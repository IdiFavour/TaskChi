import { Request } from "express";

export interface CustomRequest extends Request {
  session: {
    userId: number;
  };
}
