const db = require('../db/models')
const bcrypt = require('bcryptjs')
const usuario = db.Usuario

const usuarioController = {
    index: function (req, res) {
        usuario.findAll()
            .then(function(productos){
                res.render("index", {productos : productos})
            })
        res.render('login');
    },
    login: function (req, res, next) {
        res.render('login');
    },

    register: function (req, res, next) {
        res.render('register');
    },

    profile: function (req, res, next) {
        res.render('profile');
    },

    mostrar: function (req, res) {
        res.render("register")
    },

    crear: function (req, res) {
      let passEncriptada = bcrypt.hashSync(req.body.passwordReg, 10);
      db.Usuario.create({
        email: req.body.emailReg,
        nombre: req.body.usuarioReg,
        fecha: req.body.fechaDeNacimientoReg,
        contrasenna: passEncriptada
      })
        .then(function () {
          res.redirect('/')
        })
        .catch(function (error) {
          console.log(error);
        })
    }

};

module.exports = usuarioController;