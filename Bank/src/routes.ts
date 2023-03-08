import { Router } from "express";
import { AuthController } from "./controllers/auth.controller";
import { TransactionController } from "./controllers/transaction.controller";
import { UserController } from "./controllers/user.controller";
import { HomeController } from "./controllers/home.controller";

const router = Router();

// Auth routes
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

// Transaction routes
router.post("/transactions", TransactionController.transfer);
router.get("/transactions", TransactionController.getTransactions);

// User routes
router.post("/users", UserController.create);
router.get("/balance", UserController.getBalance);
router.put("/balance", UserController.updateBalance);

// Home route
router.get("/", HomeController.index);

export default router;
