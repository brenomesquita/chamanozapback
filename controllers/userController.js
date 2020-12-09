// const {
//   registerPhone,
//   registerName,
//   registerCep,
//   registerComplement,
// } = require('../services/userService');
const chatResponses = require('../utils/chatResponses');
const {
  confirmPhoneNumber,
  whatIsYourName,
  whatIsYourCep,
  whatIsYourComplement,
  whatIsYourHouseNumber,
} = chatResponses;

const botMessage = (name, message, next, time, username = '') => 
  ({ name, message, next, time, username });

const registerUser = async (io) => {
  let username = '';
  io.emit('botMessage', botMessage(
    whatIsYourName.name,
    whatIsYourName.message,
    'whatIsYourName',
    new Date(),
    username,
  ));

  io.on('whatIsYourName', async ({ message }) => {
    username = message;
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourName.next].name,
      chatResponses[whatIsYourName.next].message,
      whatIsYourName.next,
      new Date(),
      username,
    ));
  });

  io.on('confirmPhoneNumber', async ({ message }) => {
    // registerPhone(message);
    io.emit('botMessage', botMessage(
      chatResponses[confirmPhoneNumber.next].name,
      chatResponses[confirmPhoneNumber.next].message,
      confirmPhoneNumber.next,
      new Date(),
      username,
    ));
  });

  io.on('whatIsYourCep', async ({ message }) => {
    // registerCep(message);
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourCep.next].name,
      chatResponses[whatIsYourCep.next].message,
      whatIsYourCep.next,
      new Date(),
      username,
    ));
  });

  io.on('whatIsYourComplement', async ({ message }) => {
    // registerComplement(message);
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourComplement.next].name,
      chatResponses[whatIsYourComplement.next].message,
      whatIsYourComplement.next,
      new Date(),
      username,
    ));
  });


  io.on('whatIsYourHouseNumber', async ({ message }) => {
    // registerComplement(message);
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourHouseNumber.next].name,
      chatResponses[whatIsYourHouseNumber.next].message,
      whatIsYourHouseNumber.next,
      new Date(),
      username,
    ));
  });

};

module.exports = {
  registerUser,
}
