const express = require('express');
const router = express.Router();
const adminData = require('./admin');

/**
 * path: Helps us to get the absolute path of the project directory.
 */
// const path = require('path')

router.use('/home', (request, response) => {
    const products = adminData.products;
    // response.send("<html><head>Hello from Nodejs</head></html>");
    // response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    response.render('shop', {
        docTitle: "Levi's",
        prods: products
    });
});

module.exports= router;
