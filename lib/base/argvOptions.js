const build = require('../features/build')

module.exports = [
    {
        name:"build",
        alias:"b",
        desc:"根据option文件生成meta文件",
        feature:build
    },
    // {
    //     name:"reset",
    //     alias:"r",
    //     desc:"批量重置文件名，参数digit,prefix",
    //     feature:reset
    // },
    // {
    //     name:"prefix",
    //     alias:"p",
    //     desc:"设置文件前缀",
    //     feature:null
    // },
]