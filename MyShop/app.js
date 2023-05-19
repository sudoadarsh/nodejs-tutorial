/**
 * Module imports.
 */
const express = require('express'); // express module.
const bodyParse = require('body-parser'); // body-parser module.
const path = require('path'); // path module.

/**
 * Local modules.
 */
const endpoints = require('./utils/endpoints'); // endpoints.
const rootDir = require('./utils/root-dir'); // root directory.
const admin = require('./routes/admin');
const shop =  require('./routes/shop');


const app = express(); // Get an instance of express as app.

/**
 * Globally set the template engine.
 */
app.set('view engine', 'ejs');
app.set('views', 'views');

/**
 * Define the public files.
 */
app.use(express.static(path.join(rootDir, 'public')));

/**
 * Parses the incoming request.
 */
app.use(bodyParse.urlencoded({extended: false}));

/**
 * Handles request made with endpoint: /admin
 */
app.use(endpoints.admin, admin);

/**
 * Handles request made with endpoint: /
 */
app.use(endpoints.home, shop);

app.listen(3000); // Start the server.