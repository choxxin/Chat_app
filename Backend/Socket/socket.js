import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return usersocketmap[receiverId];
};

const usersocketmap = {}; //userId:socketId

io.on("connection", (socket) => {
  console.log("A user conneted", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") usersocketmap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(usersocketmap));

  //socket.on() is used to listen to the events for both cliet and server
  socket.on("disconnect", () => {
    console.log("A user disconneted", socket.id);
    delete usersocketmap[userId];
    io.emit("getOnlineUsers", Object.keys(usersocketmap));
  });
});

export { app, io, server };
