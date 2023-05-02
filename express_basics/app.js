// const http = require('http');
/**
 * Imports.
 * expresss: For middlewares.
 * body-parser: For parsing form bodies received in requests.
 * admin.js: Part of routing files.
 * shop.js: Part of routing files.
 */
const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


/**
 * Adding a new middleware function.
 * A request handler passed to it will be execute for every incoming request.
 */
app.use(bodyParse.urlencoded({extended: false}));
/**
 * 💡 1. Add Product page.
 * 💡 2. Product page.
 */
app.use(adminRoutes);
app.use(shopRoutes);

/**
 * Create the server and listen to it. 
 */
// const server = http.createServer(app);
// server.listen(2000);
app.listen(3000)
