var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CDW01 - Capítulo 01 - Ejercicio 01' });
});

module.exports = router;
