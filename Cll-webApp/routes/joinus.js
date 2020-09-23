const express = require('express');
const joinus = express.Router();

joinus.route('/')
.get((req,res) => {
    res.end('this is the join Us page');
});

module.exports = joinus;