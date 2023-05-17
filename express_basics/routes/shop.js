const express = require('express');
const router = express.Router();
// const adminData = require('./admin');

const controller = require('../controllers/products');

/**
 * path: Helps us to get the absolute path of the project directory.
 */
// const path = require('path')

router.use('/home', controller.getHome);

module.exports= router;
