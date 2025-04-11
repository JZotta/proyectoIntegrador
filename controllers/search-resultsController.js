const infoBase = require('../db/index')

const resultados = {
    index : function(req, res, next) {
        res.render('search-results',
        { datosUsuario: infoBase.datosUsuario, 
          datosProductos: infoBase.productos,
        }
        );
    }
  };
    
    module.exports = resultados;