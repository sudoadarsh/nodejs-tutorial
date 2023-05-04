// const http = require('http');
/**
 * Imports.
 * expresss: For middlewares.
 * body-parser: For parsing form bodies received in requests.
 * admin.js: Part of routing files.
 * shop.js: Part of routing files.
 * path: To get the absolute path.
 */
const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const path = require('path');


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
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((request, response)=> {
    // response.status(404).send("<html><head>404 Page not found</head></html>");
    response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

/**
 * Create the server and listen to it. 
 */
// const server = http.createServer(app);
// server.listen(2000);
app.listen(3000)
