// src/services/transaction.service.ts

import { getRepository } from "typeorm";
import { Transaction } from "../models/transaction.model";
import { User } from "../models/user.model";

export class TransactionService {
  public async transfer(
    senderId: number,
    receiverId: number,
    amount: number
  ): Promise<Transaction> {
    const userRepository = getRepository(User);
    const transactionRepository = getRepository(Transaction);

    const sender = await userRepository.findOneOrFail(senderId);
    const receiver = await userRepository.findOneOrFail(receiverId);

    if (sender.balance < amount) {
      throw new Error("Insufficient balance");
    }

    sender.balance -= amount;
    receiver.balance += amount;

    const transaction = new Transaction();
    transaction.senderId = senderId;
    transaction.receiverId = receiverId;
    transaction.amount = amount;

    await userRepository.save([sender, receiver]);
    await transactionRepository.save(transaction);

    return transaction;
  }

  public async getTransactions(userId: number): Promise<Transaction[]> {
    const transactionRepository = getRepository(Transaction);

    const transactions = await transactionRepository
      .createQueryBuilder("transaction")
      .where(
        "transaction.senderId = :userId OR transaction.receiverId = :userId",
        { userId }
      )
      .getMany();

    return transactions;
  }
}
