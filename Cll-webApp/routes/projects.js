const express = require('express');
const projects = express.Router();

projects.route('/')
.get((req,res) => {
    res.end('this is the projects page');
});

module.exports = projects;