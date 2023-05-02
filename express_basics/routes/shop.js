const express = require('express');
const router = express.Router();

router.use('/home', (request, response) => {
    response.send("<html><head>Hello from Nodejs</head></html>");
});

module.exports= router;
