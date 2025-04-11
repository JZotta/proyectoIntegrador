const infoBase = require('../db/index')


const productAddController = {
    index : function(req, res, next) {
        res.render('productAdd', 
          { datosUsuario: infoBase.datosUsuario, });
      }
    
    };
    
    module.exports = productAddController;