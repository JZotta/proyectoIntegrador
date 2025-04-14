const infoBase = require('../db/index')

const usuarioController = {
    index : function(req, res, next) {
        res.render('login');
      },

    login : function(req, res, next) {
      res.render('login');
    },

    register : function(req, res, next) {
      res.render('register');
    },

    profile : function(req, res, next) {
      res.render('profile',
        {datosUsuario : infoBase.datosUsuario,
        datosProductos: infoBase.productos,
        },
        
      );
    },

      };
    
    module.exports = usuarioController;