const express = require('express');
const Tutoriels = express.Router();

Tutoriels.route('/')
.get((req,res) => {
    res.end('this is the Tutoriels page');
});

module.exports = Tutoriels;