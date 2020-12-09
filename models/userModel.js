const connection = require('./connection');

const registerPhone = (phone) =>
  connection()
    .then((db) => db
      .collection('cnz_users')
      .insertOne({ phone })
    )
    .then((insertedId) => ({ ok: true, insertedId }));


const registerName = (phone, name) =>
  connection()
    .then((db) => db
      .collection('cnz_users')
      .updateOne({ phone }, { $push: { 'user_name': name }})
    )
    .then(() => ({ ok: true }));

const registerCep = (phone, cep) =>
  connection()
    .then((db) => db
      .collection('cnz_users')
      .updateOne({ phone }, { $push: { 'user_cep': cep }})
    )
    .then(() => ({ ok: true }));

const registerComplement = (phone, complement) =>
  connection()
    .then((db) => db
      .collection('cnz_users')
      .updateOne({ phone }, { $push: { 'user_complement': complement } })
    )
    .then(() => ({ ok: true }));


module.exports = {
  registerPhone,
  registerName,
  registerCep,
  registerComplement,
};