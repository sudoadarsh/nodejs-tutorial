const express = require('express'); 
const endpoints = require('../utils/endpoints');
const controller = require('../controllers/product');

const router = express.Router(); // instance of router.

/**
 * Get the Add Product page.
 */
router.get(endpoints.adminAddProduct, controller.getAddProduct);

/**
 * Re-route to the product list page.
 */
router.post(endpoints.adminAddProduct, controller.postAddProduct);


module.exports = router;