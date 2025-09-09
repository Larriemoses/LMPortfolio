import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import path from "path";

import blogRoutes from "./routes/blog.routes";
import userRoutes from "./routes/user.routes";
import serviceRoutes from "./routes/service.routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Correct CORS configuration to allow specific origin and credentials
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's production URL later
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// ✅ Increase payload size limit to fix 413 error
app.use(express.json({ limit: "50mb" }));

// ✅ Add URL-encoded parsing with increased limit
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(morgan("dev"));

// static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.get("/", (_req: Request, res: Response) => {
  res.send("API is working...");
});

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/services", serviceRoutes);

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
