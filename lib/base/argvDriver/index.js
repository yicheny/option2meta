const {btu} = require("../../utils");
const {print} = require("../index");
const createImageBitmap = require('./builtInCommand')

module.exports = function argvDriver(argv, options) {
    options = createImageBitmap(options).concat(options)
    options.forEach((o) => {
        const value = argv[o.name] || argv[o.alias];
        if (btu.isNil(value)) return;
        if (!btu.isFunction(o.feature)) return print.info(`暂未实现 --${o.name}功能！`)
        o.feature(value, argv);
    })
}

