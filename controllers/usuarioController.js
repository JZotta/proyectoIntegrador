const db = require('../db/models')
const bcrypt = require('bcryptjs')
const usuario = db.Usuario
const usuarioController = {
    index: function (req, res) {
        usuario.findAll()
            .then(function (productos) {
                res.render("index", { productos: productos })
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    mostrar: function (req, res) {
        if (req.session.usuario != undefined) {
            return res.render("profile")
        } else {                                      //si ya esta registrado lo manda a su perd
            res.render("register",  {error: " "})
        }
    },
    crear: function (req, res) {
        if (req.body.passwordReg.length < 3) {
            return res.render("register", {
                error: "La contraseña debe tener al menos 3 caracteres"
            })
        }
        usuario.findOne({
            where: {email: req.body.emailReg}
        })
        .then(function (usuarioRegistrado) {
            if (usuarioRegistrado) {
                return res.render("register",{
                    error: "El email que intentas utilizar ya ha sido utilizado para otra cuenta"
                })
                
            }
            
        })


        let passEncriptada = bcrypt.hashSync(req.body.passwordReg, 10);
        usuario.create({
            email: req.body.emailReg,
            nombre: req.body.usuarioReg,
            fecha: req.body.fechaDeNacimientoReg,
            dni: req.body.nroDocumentoReg,
            contrasenia: passEncriptada
        })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                console.log(error);
                res.render("register", {error: " "})
            })
    },
    login: function (req, res) {
        if (req.session.usuario != undefined) {
            return res.redirect('/')
        }
        res.render("login", {error: " "})
    },
    processLogin: function (req, res) {
        usuario.findOne({
            where: { email: req.body.emailLog }
        })
            .then(function (resultado) {
                if (resultado == undefined) {
                    return res.render("login", {
                        error: "El email no se encuentra registrado"
                    })
                }
                if (resultado.email == req.body.emailLog) {
                    let check = bcrypt.compareSync(req.body.passwordLog, resultado.contrasenia)  //chequear esto
                    if (check == true) {
                        req.session.usuario = resultado
                        res.cookie("usuario", resultado.id_usuario, {maxAge: 1000 * 60 * 5})
                    }
                }
                res.redirect("/")
            })
            .catch(function (error) {
                console.log(error)
                return res.render("login", {
                    error: ""
                })
            })
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("usuario");
        res.redirect("/");
    },
    profile: function (req, res) {
        if (req.session.usuario == undefined) {
            return res.redirect('/usuario/login')
        }
        usuario.findByPk(req.session.usuario.id_usuario, {
            include: [{association: "productos"}]
        })
        .then(function(usuario) {
            res.render('profile', {
                usuario: usuario,
                productos: usuario.productos
            })
        })
        .catch(function(error) {
            console.log(error);
            res.redirect('/')
        })
    },
};
module.exports = usuarioController;









