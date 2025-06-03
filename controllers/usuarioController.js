const db = require('../db/models')
const bcrypt = require('bcryptjs')
const usuarioController = {
    index: function (req, res) {
        db.Usuario.findAll()
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
        } else {                                      
            res.render("register",  {error: " "})
        }
    },
    crear: function (req, res) {
        if (req.body.passwordReg.length < 3) {
            return res.render("register", {
                error: "La contraseña debe tener al menos 3 caracteres"
            })
        }
        db.Usuario.findOne({
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
        db.Usuario.create({
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
        db.Usuario.findOne({
            where: { email: req.body.emailLog }
        })
        .then(function (resultado) {
            if (resultado == undefined) {
                return res.render("login", {
                    error: "El email no se encuentra registrado"
                })
            }
            if (resultado.email == req.body.emailLog) {
                let check = bcrypt.compareSync(req.body.passwordLog, resultado.contrasenia)  
                if (check == true) {
                    req.session.usuario = resultado;
                    res.cookie('usuario', resultado.id_usuario, {maxAge: 1000 * 60 * 60 * 24})
                  return res.redirect("/");
                }
            }
            return res.render("login", {
                error: "Credenciales inválidas"
            });
        })
        .catch(function (error) {
            console.log(error);
            return res.render("login", {
                error: "Error al intentar iniciar sesión"
            });
        });
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
        db.Usuario.findByPk(req.session.usuario.id_usuario, {
            include: [{association: "productos"}]
        })
        .then(function(usuario) {
            res.render('profile', {
                usuario: usuario,
                productos: usuario.productos,
                usuarioLogueado: req.session.usuario
            })
        })
        .catch(function(error) {
            console.log(error);
            res.redirect('/')
        })
    },

    verPerfil: function (req, res) {        
        db.Usuario.findByPk(req.params.id, {
            include: [{association: "productos"}]
        })
        .then(function(usuario) {            
            res.render('profile', {
                usuario: usuario,
                productos: usuario.productos,
                usuarioLogueado: req.session.usuario
                
            })
        })
        .catch(function(error) {
            console.log(error);
            res.redirect('/')
        })
    }
    
    
};
module.exports = usuarioController









