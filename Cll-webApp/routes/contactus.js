const express = require('express');
const contactus = express.Router();

contactus.route('/')
.get((req,res) => {
    res.end('this is the Contact Us page');
});

module.exports = contactus;