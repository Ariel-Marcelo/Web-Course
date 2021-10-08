const {Sequelize} = require ('sequelize');
const UserModel = require ('../models/User.model');
const AdministratorModel = require('../models/AdministratorModel');
const AuthModel = require ('../models/Auth.model');
const CourseModel = require('../models/Course.model');
const ReservationModel = require('../models/Reservation.model');

class Database { // se usará el patron single ton para q exista una sola conexión a la case de datos
    static _instance = null;

    static async getModels (){ // llama a los setup de los modelos

        if(!Database._instance){
            // credentials of my db
            Database._instance = new Sequelize({ // here and only here I create sequelize instance
                dialect: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'admin@admin.com',
                password: 'admin',
                database: 'my_db',
            });

            UserModel.setup(Database._instance);
            AuthModel.setup(Database._instance);
            //AdministratorModel.setup(Database._instance);
            //CourseModel.setup(Database._instance);
            //ReservationModel.setup(Database._instance);

            // Define relationships
            UserModel.hasOne(AuthModel);
            //AdministratorModel.hasOne(AuthModel);

            UserModel.hasMany(ReservationModel);
            //ReservationModel.belongsTo(UserModel);

            //CourseModel.hasMany(ReservationModel);
            //ReservationModel.belongsTo(CourseModel);

            //AdministratorModel.hasMany(CourseModel);

            await Database._instance.sync(); // sequelize write in my DB
        }
        return {
            UserModel,
            AuthModel,
            //AdministratorModel,
            //CourseModel,
            ReservationModel
        }
    }

}
module.exports = Database;