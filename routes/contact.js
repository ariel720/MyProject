'use strict';
var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;
