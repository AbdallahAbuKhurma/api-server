'use strict';

const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: String,
  url: String,
  category: String,
  price: Number,
  inStock: Number,
  count: Number,
});

const StoreModel = mongoose.model('food', storeSchema);

module.exports = StoreModel;
