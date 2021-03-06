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

const StoreModel = mongoose.model('store', storeSchema);

module.exports = StoreModel;
