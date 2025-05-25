

module.exports = function (sequelize, dataTypes) {
    let alias = 'Producto';
    let cols = {
        id_producto: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        nombre_imagen: {
            type: dataTypes.STRING
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion_producto: {
            type: dataTypes.STRING
        },

        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }


    }
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true,
    };
    const Producto = sequelize.define(alias, cols, config);
        Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey: "id_producto"
        })
        Producto.hasMany(models.Comentario,{
            as: "comentarios",
            foreignKey: "id_producto"
        })
    }
    return Producto;
}