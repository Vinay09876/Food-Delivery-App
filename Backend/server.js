import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/UserRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// call mongodb
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

// login and register endpoints
app.use("/api/user", userRouter);

// user cart data endpoint
app.use("/api/cart", cartRouter);

// place order endpoint
app.use("/api/order", orderRouter);

// to run express server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
