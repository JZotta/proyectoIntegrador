var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')
/* GET home page. */
router.get('/login', usuarioController.login);
router.get('/register', usuarioController.register);
router.get('/profile', usuarioController.profile);



module.exports = router;
