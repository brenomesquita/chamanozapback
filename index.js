const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const { registerUser } = require('./controllers/userController');


const app = express();

const PORT = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (_req, res) => res.send());

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

const io = socketIo(server);

io.on('connect', async (socket) => {
  console.log(`Nova conexão: ${socket.id}`);

  socket.on('clientMessage', ({ message }) => {
    console.log(`Cliente ${socket.id} diz: ${message}`);
  })

  socket.on('clientRegister', () => registerUser(socket))

  socket.on('disconnect', () => {
    console.log(socket.id, 'desconectou-se');
  });
});
