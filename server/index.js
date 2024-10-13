require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const http = require('http').Server(app);
const cors = require('cors');

const { insertLearningModule } = require('./database/InsertData.js');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:5173"
    }
});
app.use(express.json());
app.use(cors())

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.post('/api/upload/learning-module', async (req, res) => {
  insertLearningModule('Petunjuk Praktikum Farmasetika', 'pdf', "https://drive.google.com/file/d/1Xh_W9RdjwCMfGSGRjmuwaXUkbPJEj5ir/view?usp=drivesdk")
    .then(result => {
        console.log('Learning Module inserted successfully:', result);
    })
    .catch(err => {
        console.error('Error Learning Module', err);
    });
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});