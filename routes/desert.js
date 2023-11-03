var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('desert', { title: 'Search Results Desert' });
});

module.exports = router;