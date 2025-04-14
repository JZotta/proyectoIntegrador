const infoBase = require('../db/index');


const productController = {
    product : function(req, res, next) {
        res.render('product',  { datosProductos: infoBase.productos, });
      },
      
    productAdd : function(req, res, next) {
      res.render('productAdd', { datosUsuario: infoBase.datosUsuario, });
    },

    searchResults : function(req, res, next) {
      res.render('search-results',
      { datosUsuario: infoBase.datosUsuario, 
        datosProductos: infoBase.productos,
      });
    },

   };
    
module.exports = productController;