'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(`${MONGODB_URI}/apiData`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,

}).then(() => {
  server.start(PORT);

}).catch((err) => {
  console.log('CONECTION ERROR', err.message);

});
