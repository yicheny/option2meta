const {btu} = require("../../utils");
const {print} = require("../../utils");
const createImageBitmap = require('./builtInCommand')

module.exports = async function argvDriver(argv, options) {
    options = createImageBitmap(options).concat(options)
    for(const o of options){
        const value = argv[o.name] || argv[o.alias];
        if (btu.isNil(value)) continue;
        if (!btu.isFunction(o.feature)) return print.info(`暂未实现 --${o.name}功能！`)
        await o.feature(value, argv);
    }
}

