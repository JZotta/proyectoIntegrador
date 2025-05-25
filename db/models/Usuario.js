module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';
    let cols = {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING(400)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },


    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true,
    };
    const Usuario = sequelize.define(alias, cols, config);

        Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_usuario'
        });
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'id_usuario'
        });
    };
    return Usuario;
}