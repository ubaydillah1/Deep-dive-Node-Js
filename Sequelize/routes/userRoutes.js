import express from "express";
import { createNewUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/insert", createNewUser);

export default router;
