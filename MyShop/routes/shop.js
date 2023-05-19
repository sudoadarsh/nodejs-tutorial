const express = require('express'); // express module.
const endpoints = require('../utils/endpoints'); // the endpoints.


const router = express.Router(); // the router.
router.get(endpoints.homeAllProducts, (request, response) => {
    response.render('shop/product-list');
});

module.exports = router;