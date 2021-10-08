const {Model, DataTypes} = require ('sequelize');

class Administrator extends Model{
    static setUp(sequelize){
        Administrator.init({
            id:{},
            
        });
    }
}

module.exports = Administrator;
