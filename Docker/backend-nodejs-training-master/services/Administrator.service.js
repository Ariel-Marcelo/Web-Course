const bcrypt = require('bcrypt');
const Database = require('../lib/Database');

class AdministratorService {
    static _administratorServiceInstance = null;

    async getModels() {
        const { AdministratorModel, AuthModel } = await Database.getModels();
        this._adminModel = AdministratorModel;
        this._authModel = AuthModel;
    }


    static getInstance() {
        if (!AdministratorService._administratorServiceInstance === null) {
            AdministratorService._administratorServiceInstance = new AdministratorService();
            await AdministratorService._administratorServiceInstance .getModels();
        }
        return CourseService._administratorServiceInstance;
    }

    async getAll() {
        return this._adminModel.findAll();
    }

    async getOne() {
        return this._adminModel.findOne({
            where: { uuid }
        });
    }

    async create(name, lastName, email, password) {
        const user = await this._adminModel.create({
            email,
            name,
            lastName,
        });
        const hashedPassword = await bcrypt.hash(password, 10);
        const auth = await this._authModel.create({
            password: hashedPassword
        });
        await user.setAuth(auth);
        return user;
    }

    async update() {}

    async delete() {}
}

module.exports = AdministratorService;
