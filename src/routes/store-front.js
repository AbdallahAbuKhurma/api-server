'use strict';

const express = require('express');
const router = express.Router();
const StoreModel = require('../models/store-front');
const dataColection = require('../models/data-collection-class');
const validator = require('../middlewares/clothes.validator');
const storeData = new dataColection(StoreModel);

const getStoreData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await storeData.read(id);
    res.json({data});
  } catch (error) {
    next(error);
  }
};

const createStoreData = async (req, res, next) => {
  try {
    const createdData = req.body;
    const newStroeData = await storeData.create(createdData);
    res.json(newStroeData);
  } catch (error) {
    next(error);
  }
};

const updateStoreData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const newStoreData = await storeData.update(id, updatedData);
    res.json(newStoreData);
  
  } catch (error) {
    next(error);
  }
};

const deleteStoreData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedData = await storeData.delete(id);
    res.json(deletedData);
  
  } catch (error) {
    next(error);
  }
};

router.get('/', getStoreData);

router.get('/:id', getStoreData);

router.post('/', validator, createStoreData);

router.put('/:id', validator ,updateStoreData);

router.delete('/:id', deleteStoreData);

module.exports = router;
