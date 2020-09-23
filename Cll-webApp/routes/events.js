const express = require('express');
const events = express.Router();

events.route('/')
.get((req,res) => {
    res.end('this is the join Us page');
});

module.exports = events;