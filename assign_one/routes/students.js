const express = require('express');
const router = express.Router();
const path = require('path')
const rootDir = require('../utils/path');

const adminData = require('./admin'); // To get the list of students.

router.get('/all', (req, res)=> {
    // res.sendFile(path.join(rootDir, 'views', 'students.html'));
    res.render('students', {
        title: "All Students",
        user: adminData.students
    });
});

module.exports = {
    "router": router
}