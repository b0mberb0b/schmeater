var express = require('express');
var router = express.Router();
var Controller = require('../controllers/main');

/* GET home page. */
router.get('/', Controller.index);

module.exports = router;
