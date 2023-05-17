const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/products'); // The product controller.
/**
 * Util to get the root directory of the project.
 */
const rootDir = require('../utils/path');

/**
 * Store the details about the products.    
 */
const products = [];

/* router.get('/addProduct', (request, response) => {
    // response.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input><button type="submit">Submit</button></form>');
    // response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    response.render('add-product', {
        title: "Add New Product"
    })
}); */
router.get('/addProduct',controller.getAddProduct);

/* router.post('/product', (request, response) => {
    products.push({
        title: request.body.title
    });
    response.redirect('/shop/home');
}); */
router.post('/product',controller.postProduct);

module.exports = {
    "router": router,
    "products": products
}
