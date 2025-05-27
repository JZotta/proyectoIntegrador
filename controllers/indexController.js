const db = require('../db/models')

const indexController = {
        index: function (req, res) {
        db.Producto.findAll()
            .then(function(productos){
                res.render("index", {productos : productos, usuario: req.session.usuario})
            })
        }
    }

module.exports = indexController;