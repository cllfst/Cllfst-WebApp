const express = require('express');
const signin = express.Router();

signin.route('/')
.get((req,res) => {
    res.end('this is the Sign in  page');
});

module.exports = signin;