import express from "express";
import { register, login } from "../controllers/auth.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", verifyToken);

export default router;
