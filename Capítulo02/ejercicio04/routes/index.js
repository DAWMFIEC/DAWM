var express = require('express');
var router = express.Router();

let modulo = 'CDW01'
let capitulo = 'Capítulo 02'
let ejercicio = 'Ejercicio 03'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: modulo + ' - ' + capitulo + ' - ' + ejercicio, ejercicio: ejercicio });
});

module.exports = router;
