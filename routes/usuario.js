var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')
/* GET home page. */
router.get('/profile/:id', usuarioController.verPerfil)
router.get('/profile', usuarioController.profile)


router.get('/register', usuarioController.mostrar)
router.post('/nuevoUsuario', usuarioController.crear)

router.get('/login', usuarioController.login)

router.post('/logout', usuarioController.logout)
router.post('/processLogin', usuarioController.processLogin)



module.exports = router;
