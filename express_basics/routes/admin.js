const express = require('express');
const router = express.Router();
const path = require('path');
/**
 * Util to get the root directory of the project.
 */
const rootDir = require('../utils/path');

router.get('/addProduct', (request, response) => {
    // response.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input><button type="submit">Submit</button></form>');
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (request, response) => {
    response.redirect('/shop/home');
});

module.exports = router