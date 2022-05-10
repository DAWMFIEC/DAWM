var express = require('express');
var router = express.Router();

let modulo = 'CDW01'
let capitulo = 'Capítulo 03'
let ejercicio = 'Ejercicio 01'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: modulo + ' - ' + capitulo + ' - ' + ejercicio, ejercicio: ejercicio });
});

module.exports = router;
