const express = require('express'); // express module.
const endpoints = require('../utils/endpoints'); // the endpoints.
const controller = require("../controllers/product"); // the controllers.
const router = express.Router(); // the router.

router.get(endpoints.homeAllProducts, controller.getProductList);
module.exports = router;