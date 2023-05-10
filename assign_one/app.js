/** Follow these steps to setup a Node.js app.
 * 1. npm init.
 * 2. add Nodemonmodule as dev dependency.
 * 3. add auto start functionality in [package.json]
 * 4. add body-parser module as production dependency.
 */

const express = require('express') // Import express module.
const parser = require('body-parser') // Import body-parse module.

const app = express() // Create an express app.

/** Middleware 1.
 * To parse the incoming request data.
 * The request handler passed to this will be executed for every incoming request.
 */
app.use(parser.urlencoded({extended: false}))

