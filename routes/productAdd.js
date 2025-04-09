var express = require('express');
var router = express.Router();
const productAddController = require('../controllers/productAddController')
/* GET home page. */
router.get('/', productAddController.index);

module.exports = router;
