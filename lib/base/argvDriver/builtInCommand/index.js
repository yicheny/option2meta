const version = require("./version");
const help = require("./help");

module.exports = function  builtInCommand(options){
    const buildInOptions = [
        {
            name: "version",
            alias: 'v',
            desc: "打印当前版本并退出",
            feature: version,
        },
        {
            name: "help",
            alias: 'h',
            desc: "打印这个列表并退出",
            feature: () => help(allOptions),
        },
    ]
    const allOptions = buildInOptions.concat(options)
    return buildInOptions
}
