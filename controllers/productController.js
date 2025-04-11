const infoBase = require('../db/index')

const productController = {
    index : function(req, res, next) {
        res.render('product',  { datosProductos: infoBase.productos, });
      }

   };
    
    module.exports = productController;