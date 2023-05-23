 // const http = require('http');
/**
 * Imports.
 * express: For middleware.
 * body-parser: For parsing form bodies received in requests.
 * admin.js: Part of routing files.
 * shop.js: Part of routing files.
 * path: To get the absolute path.
 */
const express = require('express');
const app = express();

/**
 * Using app.set() to set value globally in the node js.
 * The value can be then retrived using app.get().
 */
app.set('view engine', 'ejs'); // Set the global templating engine to ejs.
app.set('views', 'views');

const bodyParse = require('body-parser'); 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const controller = require('./controllers/error');

/**
 * Adding a new middleware function.
 * A request handler passed to it will be execute for every incoming request.
 */
app.use(bodyParse.urlencoded({extended: false}));

/**
 * Passing files statically.
 * Enable the user to access the public folder containing the styling.
 */
app.use(express.static(path.join(__dirname, "public")))

/**
 * 💡 1. Add Product page.
 * 💡 2. Product page.
 * 💡 3. 404 error page.
 */
app.use('/admin',adminData.router);
app.use('/shop',shopRoutes);

app.use(controller.error);

/**
 * Create the server and listen to it. 
 */
// const server = http.createServer(app);
// server.listen(2000);
app.listen(2000)