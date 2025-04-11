const infoBase = require('../db/index')

const profileController = {
    index : function(req, res, next) {
        res.render('profile', 
          { datosUsuario: infoBase.datosUsuario, });
      }
    };
    
    module.exports = profileController;