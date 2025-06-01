var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
/* GET home page. */
router.get('/detalle/:id_producto',productController.detalle)
router.get('/productAdd', productController.productAdd)
router.get('/searchResults', productController.searchResults)

router.post('/guardar', productController.guardar)
router.post('/comentar/:id_producto', productController.agregarComentario)

module.exports = router;
