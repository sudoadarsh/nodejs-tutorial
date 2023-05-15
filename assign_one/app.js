/** Follow these steps to setup a Node.js app.
 * 1. npm init.
 * 2. add Nodemonmodule as dev dependency.
 * 3. add auto start functionality in [package.json]
 * 4. add body-parser module as production dependency.
 */
const express = require('express'); // express module.
const parser = require('body-parser'); // body-parse module.
const rootDir = require('./utils/path'); // root dir.
const path = require('path'); // path module.

const admin = require('./routes/admin'); // admin routes.
const students = require('./routes/students'); // student routes.

const app = express(); // Create an express app.

/**
 * To expose public files.
 */
app.use(express.static(path.join(rootDir, 'public')));

/**
 * Define the dynamic templating engine globally.
 * Also define the views.
 */
app.set('view engine', 'ejs'); // Use ejs as the templating engine.
app.set('views', 'views');


/**
 * To parse the incoming request data.
 * The request handler passed to this will be executed for every incoming request.
 */
app.use(parser.urlencoded({extended: false}));

/**
 * 1. Handles request made with the endpoint: /admin
 * 2. Handles request made with the endpoint: /students
 */
app.use('/admin', admin.router);
app.use('/students', students.router);

app.listen(2000); // Start listening to the server.