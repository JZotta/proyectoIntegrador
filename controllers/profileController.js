const infoBase = require('../db/index')

const profileController = {
    index : function(req, res, next) {
        res.render('profile', 
          { datosUsuario: infoBase.datosUsuario, 
            datosProductos: infoBase.productos,
          }
          );
      }
    };
    
    module.exports = profileController;