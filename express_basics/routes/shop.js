const express = require('express');
const router = express.Router();

/**
 * path: Helps us to get the absolute path of the project directory.
 */
const path = require('path')

router.use('/home', (request, response) => {
    // response.send("<html><head>Hello from Nodejs</head></html>");
    response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports= router;
