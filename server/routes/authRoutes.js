import express from "express";
import { Login, Logout, signUp } from "../controllers/authControllers.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signUp);
authRoutes.post("/login", Login);
authRoutes.get("/logout", Logout);


export default authRoutes;