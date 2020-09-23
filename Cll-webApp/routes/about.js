const express = require('express');
const about = express.Router();

about.route('/')
.get((req,res) => {
    res.end('this is the About page');
});

module.exports = about;