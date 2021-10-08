const {Model, DataTypes} = require ('sequelize');

class User extends Model {
    static setup(sequelize){ // sequelize obliga a tener sola una instancia de sequelize
        User.init({ // init recibe un objeto de configuración
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true

            }, 
            uuid: {
                type: DataTypes.UUID,
                unique: true,
                allowNull: false

            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            organization: {
                type: DataTypes.STRING,
                allowNull: false,

            }, 
        },{
            sequelize, // enviamos esta instancia
            modelName: 'user' // si no le damos un nombre coje el de la clase
        });
    }
}

module.exports = User;