const express = require('express');
const router = express.Router(); // For Routing.
const path = require('path');
const rootDir = require('../utils/path'); // The root directory.

const students = []; // To store the students.

/**
 * Endpoint: /addStudents/admin
 * Method: GET
 * Returns the "Add Students" page.
 */
router.get('/addStudents', (req, res)=> {
    // res.sendFile(path.join(rootDir, 'views', 'form.html')); // To send HTML file.
    res.render('form', {
        title: "ADD STUDENTS"
    });
});

/**
 * Endpoint: /addStudents/admin
 * Method: POST
 * Add the entered student.
 */
router.post('/addStudents', (req, res) => {
    students.push(req.body.title);
    res.redirect('/students/all');
});

module.exports = {
    "router": router,
    "students": students
};