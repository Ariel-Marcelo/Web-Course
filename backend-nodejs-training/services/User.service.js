const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: 1,
        uuid: 'abcd-123',
        name: 'John',
        lastName: 'Doe',
        email: 'example@exmple.com',
        password: '123456',
        phone: '123456789',
        organization: 'Example',
    }
];

class UserService {
    static _userServiceInstance = null;

    constructor() {}

    static getInstance() {
        if (!UserService._userServiceInstance) {
            UserService._userServiceInstance = new UserService();
        }
        return UserService._userServiceInstance;
    }

    getAll() {
        return users;
    }

    getOne(uuid) {
        return users.find((user) => user.uuid === uuid);
    }

    create(name, lastName, email, phone, organization) {
        const user = {
            id: users.length + 1,
            uuid: uuidv4(),
            name,
            lastName,
            email,
            phone,
            organization
        }
        users.push(user);
        return user;
    }

    update(uuid, name, lastName, email, phone, organization){
        
        const userOld = users.find( (myuser) =>  myuser.uuid === uuid);
        const index = users.findIndex( (myUser) => myUser.uuid === uuid);
        const userUpdate = {
            id: index + 1,
            uuid: uuid,
            name: name,
            lastName: lastName,
            email: email,
            phone: phone, 
            organization: organization
        }
        users.splice(index, 1, userUpdate );
        return userUpdate;


    }

    delete(uuid){
        const index = users.findIndex( (myUser) => myUser.uuid === uuid);
       
        const userDeleted = users[index];
        users.splice(index, 1);
        return userDeleted;
    }

}

module.exports = UserService;
