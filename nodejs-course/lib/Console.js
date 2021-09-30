const chalk = require('chalk');
class Console{
    constructor(moduleName){
        this.moduleName = moduleName;

    }

    success(){
        console.log(`${chalk.bgGreen('[' + this.moduleName + ']')} ${chalk.gray(new Date().toUTCString())}`);
    }
}