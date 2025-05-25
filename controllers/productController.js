const db = require('../db/models')

const productController = {
    detalle: function (req,res) {
          db.Producto.findByPk(req.params.id ,{
            include: [{association: "usuario"},
                      {association: "comentarios", include: ["usuario"]}
            ]
          })
          
          .then(function (producto) {
            res.render("product", {producto: producto})
          })
          .catch(function (error) {
          console.log(error)
          })
      },


    product : function(req, res, next) {
        res.render('product');
      },
      
    productAdd : function(req, res, next) {
      res.render('productAdd');
    },

    searchResults : function(req, res, next) {
      res.render('search-results');
    },

   };
    
module.exports = productController;