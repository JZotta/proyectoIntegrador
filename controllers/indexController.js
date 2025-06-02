const db = require('../db/models')

const indexController = {
    index: function (req, res) {
        db.Producto.findAll({
            include: [{ association: "usuario" }]
        })
        .then(function(productos){
            res.render("index", {
                productos: productos,
                usuarioLogueado: req.session.usuario
            })
        })
        .catch(function(error) {
            console.log(error);
            res.redirect('/');
        })
    }
}

module.exports = indexController;