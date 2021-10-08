const {Model, DataTypes} = require('sequelize')

class Auth extends Model {
    static setUp(sequelize){
        Auth.init({
            id:{
                type: DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true,
                

            }, 
            password:{
                type: DataTypes.STRING,
                allowNull: false,

            },
            isActive:{
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        },{
            sequelize,
            modelName: 'auth'
        });

    }
}

module.exports = Auth;