const {ePath, eFS, print} = require('../../utils')

module.exports = function build(value){
    // console.log("build", value, ePath.getRootPath());
    print.info("option2meta start build...")

    const configAbsPath = ePath.resolve(ePath.getRootPath(), value)
    const configInfo = require(configAbsPath)

    const configDirPath = ePath.dirname(configAbsPath)
    const optionAbsPath = ePath.resolve(configDirPath,configInfo.optionPath)
    const optionInfo = require(optionAbsPath)
    const metaInfo = createMetaInfoFromOption(optionInfo,configInfo.format)
    const metaAbsPath = ePath.resolve(configDirPath,configInfo.metaPath)
    const templateAbsPath = ePath.resolve(configDirPath,configInfo.templatePath)
    const templateInfo = eFS.read(templateAbsPath)
    eFS.write(metaAbsPath, templateInfo.replace('\'%%SNIPPETS%%\'',metaInfo))

    print.info("option2meta build success!")
}

function createMetaInfoFromOption(option,format){
    // console.log('option', option)
    const result = option.map(o=>{
        const {nameChinese} = o;
        return {
            "title":nameChinese,
            "screenshot": "",
            "schema": {
                "componentName": "FormInput",
                "props": o
            }
        }
    })
    return JSON.stringify(result,null,format ? 2 : null)
}
