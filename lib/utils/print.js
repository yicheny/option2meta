const colors = require("colors/safe");

function createPrint(){
    return {
        info(text){
            console.log(text)
        },
        error(text){
            console.log(colors.red(text))
        }
    }
}

const print = createPrint();
module.exports = print;