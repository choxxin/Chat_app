// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
// import me from "./../../Frontend/vite-project/src/fetch.js";
dotenv.config({ path: "./.env" });
// const app = express();
// const dotenv = require("dotenv");
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectTomongodb.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import { app, server } from "./Socket/socket.js";
// import { server } from "./Socket/socket.js";
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
app.use(express.json()); //To parse the request with json payload (from req.body )
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/vite-project/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "Frontend/vite-project", "dist", "index.html")
  );
});

server.listen(PORT, () => {
  connectToMongoDB();

  console.log(`The server is runnnig on the port ${PORT}`);
});
