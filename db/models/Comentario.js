module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id_comentario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER
        },     
        id_usuario: {
            type: dataTypes.INTEGER
        },
        texto_comentario: {
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
        tableName: "comentarios",
        timestamps: false,
        underscored: true,
    };
    const Comentario = sequelize.define(alias, cols, config);

        Comentario.associate = function(models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        });
        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'id_producto'
        });
    };

    return Comentario;
}