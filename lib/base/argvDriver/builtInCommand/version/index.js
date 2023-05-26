const {print} = require("../../../../utils");

module.exports = function version(){
    print.info('v' + require('../../../../../package.json').version);
    process.exit();
}
