const fs = require('fs')

function createEnhanceFS(){
    return {
        read(path,options= { encoding:"utf-8" }){
            return fs.readFileSync(path,options)
        },
        write(path,content,options= { encoding:"utf-8" }){
            return fs.writeFileSync(path,content,options)
        }
    }
}

const eFS = createEnhanceFS()
module.exports = eFS;
