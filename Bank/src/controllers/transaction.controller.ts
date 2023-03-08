import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";
import { CustomRequest } from "../types";

export class TransactionController {
  public static async transfer(
    req: CustomRequest,
    res: Response
  ): Promise<void> {
    const transactionService = new TransactionService();

    const { receiverId, amount } = req.body;
    const senderId = req.session.userId;

    try {
      const transaction = await transactionService.transfer(
        senderId,
        receiverId,
        amount
      );
      res.json(transaction);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public static async getTransactions(
    req: CustomRequest,
    res: Response
  ): Promise<void> {
    const transactionService = new TransactionService();

    const userId = req.session.userId;

    const transactions = await transactionService.getTransactions(userId);

    res.json(transactions);
  }
}
