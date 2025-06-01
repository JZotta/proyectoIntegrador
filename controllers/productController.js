const db = require('../db/models')

const productController = {
  detalle: function (req, res) {
    db.Producto.findByPk(req.params.id_producto, {
      include: [{ association: "usuario" },
      { association: "comentarios", include: ["usuario"] }
      ]
    })

      .then(function (producto) {
        res.render("product", {
          producto: producto,
          usuarioLogueado: req.session.usuario
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  


  product: function (req, res, next) {
    res.render('product', {
      usuarioLogueado: req.session.usuario
    });
  },

  productAdd: function (req, res) {
    if (req.session.usuario != undefined) {
      return res.render('productAdd', {
      usuarioLogueado: req.session.usuario
    }) 
  }
  res.redirect('/usuario/login')
    
  },

  guardar: function (req, res) {
    if (req.session.usuario != undefined) {
      db.Producto.create({
        id_usuario: req.session.usuario.id_usuario,
        nombre_imagen: req.body.imagenProducto,
        nombre_producto: req.body.nombreProducto,
        descripcion_producto: req.body.descripcionProducto
    })
      .then(function () {
        res.redirect('/')

      })
   
      .catch(function(error) {
          res.redirect("/")
      })
    }
  },

  searchResults: function (req, res, next) {
    res.render('search-results', {usuarioLogueado: req.session.usuario
});
  },

  agregarComentario: function (req, res, next) {
    if (req.session.usuario != undefined) {
      db.Comentario.create({
        id_usuario: req.session.usuario.id_usuario,
        id_producto: req.params.id_producto,
        texto_comentario: req.body.texto_comentario
      })
      .then(function () {
        res.redirect(`/product/detalle/${req.params.id_producto}`)
      })
      .catch(function (error) {
        console.log(error);
        res.redirect(`/product/detalle/${req.params.id_producto}`)
      })
    } else {
      return res.redirect ("/usuario/login")}

  }

}



module.exports = productController