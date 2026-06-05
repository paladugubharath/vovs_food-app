import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import visitorRoutes from "./routes/visitor.js";
import reviewRoutes from "./routes/reviews.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:8081",
      "http://localhost:5173",
      "https://vovs-food-app-1.onrender.com",
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// API Routes
app.use("/api/order", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/visitor", visitorRoutes);
app.use("/api/reviews", reviewRoutes);

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

// Root Route
app.get("/", (req, res) => {
  res.json({
    status: "Backend running successfully",
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});