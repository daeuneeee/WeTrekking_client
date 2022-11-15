// server > index.js
// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
// app.use(cors());

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // 백을 프론트와 연결하는 부분
//     method: ["GET", "POST"],
//   },
// });

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + `/crews/asd/chat`);
// });

// io.on("connection", (socket) => {
//   // 유저를 특정 룸에 조인시키기
//   socket.on("join_room", (data) => {
//     socket.join(data);
//   });
//   // 메시지를 받아 특정 룸에 메시지 전송하기
//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message");
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });
