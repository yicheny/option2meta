const {btu} = require("./index");
const path = require('path')

function createEnhancePath(){
    return {
        //获取执行目录的winPath
        getRootPath(){
            return this.getWinPath(process.cwd())
        },
        getWinPath(result){
            return result.replace(/\\/g, '/');
        },
        //获取相对路径
        resolve(...paths){
            return path.resolve(...paths)
        },
        //获取绝对文件路径的目录路径
        dirname(filePath){
            return path.dirname(filePath)
        }
    }
}

const ePath = createEnhancePath()
module.exports = ePath;
