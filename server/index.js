import dotenv from "dotenv";
import express from "express";
import connectDataBase from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes End Points
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Connecting to server
app.listen(port, () => {
  console.log(`server is runnig on http://localhost:${port}`);
  connectDataBase();
});
