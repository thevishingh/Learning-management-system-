import dotenv from "dotenv";
import express from "express";
import connectDataBase from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());


// Routes End Points
app.use("/api/auth", authRoutes);

// Connecting to server
app.listen(port, () => {
    console.log(`server is runnig on http://localhost:${port}`);
    connectDataBase()
});