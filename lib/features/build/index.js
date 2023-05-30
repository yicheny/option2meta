const {ePath, eFS, print, baseApi} = require('../../utils')
const formstream = require('formstream');

module.exports = async function build(value){
    // console.log("build", value, ePath.getRootPath());
    print.info("option2meta start build...")

    const configAbsPath = ePath.resolve(ePath.getRootPath(), value)
    const configInfo = require(configAbsPath)

    const configDirPath = ePath.dirname(configAbsPath)
    const optionAbsPath = ePath.resolve(configDirPath,configInfo.optionPath)
    const optionInfo = await getOptionInfo()
    const metaInfo = createMetaInfoFromOption(optionInfo,configInfo.format)
    const metaAbsPath = ePath.resolve(configDirPath,configInfo.metaPath)
    const templateAbsPath = ePath.resolve(configDirPath,configInfo.templatePath)
    const templateInfo = eFS.read(templateAbsPath)
    eFS.write(metaAbsPath, templateInfo.replace('\'%%SNIPPETS%%\'',metaInfo))

    print.info("option2meta build success!")

    async function getOptionInfo(){
        const ext = ePath.extname(optionAbsPath);
        const transMap = {
            '.xlsx': transExcel,
            '.xls': transExcel,
        }
        const transFun = transMap[ext] || transDefault
        return await transFun();

        async function transDefault(){
            return require(optionAbsPath) || []
        }

        async function transExcel(){
            const form = formstream();
            const name = `${ePath.basename(optionAbsPath,ext)}${ext}`
            form.file('file', optionAbsPath, name)
            const res = await baseApi.postForm(configInfo.url,form)
            if(res.code !== 0) {
                print.error(`物料转换接口报错：${res.msg}`)
                return []
            }
            // console.log('res.data', res.data)
            return res.data
        }
    }
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
