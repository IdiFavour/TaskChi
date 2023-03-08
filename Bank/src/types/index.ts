import { Request } from "express";

export interface CustomRequest extends Request {
  session: {
    destroy(arg0: () => void): unknown;
    userId: number;
  };
}
