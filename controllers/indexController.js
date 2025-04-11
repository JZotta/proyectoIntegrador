const infoBase = require('../db/index')


const controller = {
    index : function(req, res, next) {
        res.render('index',
        { datosProductos: infoBase.productos, });
      }
      
    
    };
    
    module.exports = controller;