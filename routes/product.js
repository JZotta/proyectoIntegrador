var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
/* GET home page. */
router.get('/detalle/:id',productController.detalle);
router.get('/productAdd', productController.productAdd);
router.get('/searchResults', productController.searchResults);



module.exports = router;
