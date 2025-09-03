import mongoose from "mongoose";

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDataBase;
