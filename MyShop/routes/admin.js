const express = require('express'); 
const endpoints = require('../utils/endpoints');

const router = express.Router(); // instance of router.
router.get(endpoints.adminAddProduct, (request, response) => {
    console.log(request);
});

module.exports = router;