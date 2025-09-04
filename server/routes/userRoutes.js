import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);


export default userRoutes;