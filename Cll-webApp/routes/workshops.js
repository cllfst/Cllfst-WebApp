const express = require('express');
const workshops = express.Router();

workshops.route('/')
.get((req,res) => {
    res.end('this is the Workshops page');
});

module.exports = workshops;