const {btu} = require("./index");

function createEnhancePath(){
    return {
        //获取执行目录的winPath
        getRootPath(){
          return this.getWinPath(process.cwd())
        },
        getWinPath(result){
            return result.replace(/\\/g, '/');
        }
    }
}

const ePath = createEnhancePath()
module.exports = ePath;
