const express = require("express")
const http = require("http")

const app = express()
const server = http.createServer(app)
const socketIo = require("socket.io")
const io = socketIo(server)

io.on("connection",(socket)=>{
    console.log("User Connected !")

    socket.on("sendMessage", (req)=>{
        console.log(req.msg);

        socket.emit("recieveMessage","Message Recieved !!")
    })

    socket.on("disconnect",()=>{
        console.log("User Disconnected !!")
    })
})

server.listen(3000,()=>{
    console.log("Connected to Port 3000 !");
})