'use strict';
var express = require('express');
var router = express.Router();

/* GET service listing. */
router.get('/', function (req, res) {
    res.render('service', { title: 'Service' });
});

module.exports = router;
