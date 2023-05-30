[TOC]

# 描述

根据`option.json`生成对应的`meta.js`文件

# 安装依赖【开发】

```shell
pnpm i --registry=https://registry.npmjs.org
```

# 版本要求

- `node >= 16.16.0`

# 功能

## 输出包版本信息 `-v --version`

执行：

```shell
o2m -v
o2m --version
```

## 输出帮助信息 `-h --help`

```shell
o2m -h
o2m --help
```

## 配置编译 `-b --build`

```shell
o2m -b configPath
o2m --build configPath
```

注意，这里接收参数`configPath`，它是一个绝对文件路径，比如：

```shell
o2m --build ./test/configs/.o2m.config.json
```

处理`json`文件，还支持`js`文件：

```shell
o2m --build ./test/configs/.o2m.config.js
```

### 配置

下面说一下文件配置，以`js`文件为例：

```js
module.exports = {
    //是否格式化
    "format": false,
    //配置路径
    "optionPath": "../options/option.js", //支持.js .json .xlsx .xls
    //meta.ts文件生成路径
    "metaPath": "../metas/meta.ts",
    //模板文件路径
    "templatePath": "../templates/template.ts",
    //通过接口处理
    "url": 'http://www.example.com/function/importmaterial',
}
```

下面依此说明每个配置的意义：

# 后续支持的功能
1. [x] 根据`excel`文件生成配置
2. [x] 支持通过接口获取`json`