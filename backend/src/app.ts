import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

// Route imports
import blogRoutes from "./routes/blog.routes";
import userRoutes from "./routes/user.routes";
import serviceRoutes from "./routes/service.routes";

// Load env vars
dotenv.config();

// Create app instance
const app: Application = express();
const PORT = process.env.PORT || 5000;

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health Check
app.get("/", (_req: Request, res: Response) => {
  res.send("API is working...");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/services", serviceRoutes);

// DB Connection + Server Boot
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  });
