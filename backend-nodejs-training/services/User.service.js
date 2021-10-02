const { v4: uuidv4} 

const users = [{
    id:1,
    uuid: 'fdas',
    name: 'fad',
    lastName: 'dfa',
    email:'fadf',
    password: 'fadf',
    organization: 'fdad'
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

    getAll(){
        return users;
    }

    getOne(uuid){
        return users.find((user) => user.uuid === uuid);
    }

    create(name, lastName, email, phone, organization){
        const user = {
            id:users.length + 1,
            uuid: uuidv4(),
            name,
            lastName,
            email,
            phone,
            organization
        }
        users.push(user);
    }
}

module.exports = UserService;
