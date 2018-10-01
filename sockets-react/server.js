const express = require('express')
const app = express()

// socket io
const http = require('http')
const socketIO = require('socket.io')
const server = http.createServer(app)
const io = socketIO.listen(server)
server.listen(3005)

//socket.io connection
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => 
        io.emit('chat message', msg))
})
