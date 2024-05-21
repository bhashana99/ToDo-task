import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoute from "./routes/todo.route.js";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use("/api/todo", todoRoute);

app.use(express.static(path.join(__dirname, 'front-end')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
