// const express = require("express");
import express from "express";
import dotenv from "dotenv";
// import me from "./../../Frontend/vite-project/src/fetch.js";
dotenv.config({ path: "./.env" });
const app = express();
// const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectTomongodb.js";
import messageRoutes from "./routes/message.routes.js";
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
app.use(express.json()); //To parse the request with json payload (from req.body )

app.use("/api/auth", authRoutes);
app.use("api/message", messageRoutes);
app.listen(PORT, () => {
  connectToMongoDB();

  console.log(`The server is runnnig on the port ${PORT}`);
});
