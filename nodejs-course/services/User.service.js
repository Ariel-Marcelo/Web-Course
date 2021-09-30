// hemos implementado en esta clase un patron de diseño single town
class UserService{
    
    static _userServiceInstance = null; // al ser estática no depende de instancias para existir
    constructor(){}

    static getInstance(){

        if (!UserService._userServiceInstance) {

            UserService._userServiceInstance = new UserService();
        }

        return UserService._userServiceInstance;
    }

    login (email, password){
        // programar primero los casos de error es una forma de programar
        if(email !== 'admin@epn.edu.ec'){
            return false; 
        }
        if(password !== 'admin'){
            return false;
        }

        return true;
    }


}

module.export = UserService;