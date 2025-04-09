var express = require('express');
var router = express.Router();
const resultados = require('../controllers/search-resultsController')
/* GET home page. */
router.get('/', resultados.index);

module.exports = router;
