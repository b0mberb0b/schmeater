var express = require('express');
var router = express.Router();

/* Functions for executing pages have own files, store that info in variables. */
var homePageController = require('../controllers/homePage');
var seasonPageController = require('../controllers/seasonPage');
var pressPageController = require('../controllers/pressPage');
var supportPageController = require('../controllers/supportPage');
var galleryPageController = require('../controllers/galleryPage');
var aboutPageController = require('../controllers/aboutPage');

/* when url request sent, router gets the right page, activates variable method. */
router.get('/', homePageController.getPage);
router.get('/season', seasonPageController.getPage);
router.get('/press', pressPageController.getPage);
router.get('/support', supportPageController.getPage);
router.get('/about', aboutPageController.getPage);
router.get('/gallery', galleryPageController.getPage);

module.exports = router;
