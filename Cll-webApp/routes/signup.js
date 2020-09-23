const express = require('express');
const signup = express.Router();

signup.route('/')
.get((req,res) => {
    res.end('this is the sign up page');
});

module.exports = signup;