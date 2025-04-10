// server.js
const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*", // 나중에 허용할 클라이언트 주소
    methods: ["GET", "POST"],
  },
})

io.on("connection", (socket) => {
  console.log("✅ New client connected:", socket.id)

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id)
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`🚀 Socket.IO server running on port ${PORT}`)
})
