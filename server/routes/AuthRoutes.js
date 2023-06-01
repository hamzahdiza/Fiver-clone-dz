import { Router } from "express";
import { login, singUp } from "../controllers/AuthController.js";

const authRoutes = Router();

authRoutes.post("/signup", singUp);
authRoutes.post("/login", login);

export default authRoutes;
