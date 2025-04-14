const infoBase = require('../db/index')


const indexController = {
    index : function(req, res, next) {
        res.render('index',
        { datosProductos: infoBase.productos, });
        },
    


    
      
    };
    
module.exports = indexController;