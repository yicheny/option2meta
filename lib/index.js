//原生模块及第三方库
const argv = require('minimist')(process.argv.slice(2));

//基础模块
const {argvDriver, argvOptions} = require("./base");

module.exports = function main(){
    process.title ='option2meta'
    argvDriver(argv,argvOptions)
}