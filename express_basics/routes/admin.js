const express = require('express');
const router = express.Router();

router.get('/addProduct', (request, response) => {
    response.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Submit</button></form>');
});

router.post('/product', (request, response) => {
    response.redirect('/home');
});

module.exports = router