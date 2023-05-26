const {print} = require("../../../../utils");

module.exports = function help(options){
    print.info(getHelpInfo());
    process.exit();

    function getHelpInfo(){
        const baseInfo = [
            'usage: option2meta [-hv]',
            'usage: option2meta [-b configPath]',
            // 'usage: option2meta [-s base,start,end]',
            '',
        ]
        const argvInfo = createArgvInfo()
        return baseInfo.concat(argvInfo).join('\n');
    }

    function createArgvInfo(){
        const result = options.map(o => {
            return `--${o.name} -${o.alias}     ${o.desc}`
        })
        result.unshift('options')
        return result;
    }
}
