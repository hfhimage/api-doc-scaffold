# API Documentation
===================

### 1. 简介

使用 OpenAPI `V2` 规范编写 API 文档

按照 `Swagger OpenAPI v3` 官方建议进行文档切分和文件目录组织

但目前 swagger 相关工具对 v3 的支持还不是很好，因此目录结构按照 OpenAPI v3 来组织，但编译还是使用 v2

### 2. 快速开始

```bash
# 初始化
$ npm install
$ npm install -g gulp

# 编译文档
$ gulp

会生成 build/api.json 文件

# 本地运行
docker pull swaggerapi/swagger-ui
docker run -p 80:8080 -e SWAGGER_JSON=/foo/api.json -v `pwd`/build:/foo swaggerapi/swagger-ui

浏览器打开 `http://localhost` 即可访问 api 文档

```

### 3. 预备知识

* Yaml 基本语法
* Gulp 了解和基本使用
* Swagger
    * [Swagger 官方文档 / OpenAPI v3](https://swagger.io/docs/specification/about/)
    * 写得不错的教程：[《Swagger 从入门到精通》](https://www.gitbook.com/book/huangwenchao/swagger/details)
* OpenAPI v2/v3 规范
    * [OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md)

### 4. 文档编写规范

1. 考虑到团队中有英文阅读恐惧的小伙伴的文档阅读体验，统一使用`中文`来描述文档
2. api.yaml 是 api 文档的汇总文件（入口文件），文档中包括多个 `paths`(endpoints / resources)，每个 `path` 包括一个或者多个 `operations`(HTTP methods)
3. 每个 `path` 的内容独立维护在一个文件中，文件按照 controller（对应 swagger 的 `tag`） 来分类，存放在 `./paths/[controller]/` 目录下，命名可参照现有的 path 文件，`-` 作为拼写分隔符
4. components 目录存放着按照 `OpenAPI v3` 规范分类的可重用的组件，`paths` 文档可通过 $ref 相对路径引用，编写 api 文档前，可参看是否有可重用的组件可直接使用，让文档做到尽量**简洁、美观、可维护**，组件包括：
    * headers 请求header
    * parameters 请求参数
    * examples   返回结果示例
    * schemes    models，对应项目源码中定义的 vo
    * responses  返回体
