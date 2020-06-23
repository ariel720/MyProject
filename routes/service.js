'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('service', { title: 'Service' });
});

module.exports = router;
