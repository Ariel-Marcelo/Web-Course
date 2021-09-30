const chalk = require('chalk');
// la función de esta clase es enviar  mensajes de error , advertenci o exito 
//por consola  segun se lo pida los distintos módulos invoulucrados en nuestra aplicación web

class Console{
    constructor(moduleName){
        this.moduleName = moduleName;

    }

    success(message){
        console.log(`${chalk.bgGreen('[' + this.moduleName + ']')} ${chalk.gray(new Date().toUTCString())} ${message}`);
    }
    warning(message){
        console.log(`${chalk.bgYellow('[' + this.moduleName + ']')} ${chalk.gray(new Date().toUTCString())} ${message}`);
    }
    error(message){
        console.log(`${chalk.bgRed('[' + this.moduleName + ']')} ${chalk.gray(new Date().toUTCString())} ${message}`);
    }
}

module.exports = Console;