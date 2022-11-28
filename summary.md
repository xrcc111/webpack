# 一.为什么使用webpack原因
`1. 解决js代码作用域问题`
`2. 解决代码拆分问题`
`3. 浏览器支持模块`

# 二.本地安装webpack

1.  npm install webpack webpack-cli --save-dev  当前目录下安装webpack以及webpack-cli (v5)

2. 找到对应的目录查看当前webpack的版本 npm info webpack version(此处以window为例)

3. 然后打包你创建的项目，此处以 webpack02 举例子  npx webpack; 查看打包详细信息  npx webpack --stats detailed

4. 查看webpackcli  配置 npx webpack --help

5. npx webpack --entry ./src/index.js --mode production 设置打包入口文件

6. 命令行太麻烦，所以新建webpack.config.js 来配置webpack 的打包环境, 因为在node中，所以该文件的配置项需要使用且要符合Common.js
   的语法规范
7. 详细可参照webpack02中的自定义配置的 webpack.config.js

# 三. webpack 插件 HtmlWebpackPlugin的使用
1. npm install html-webpack-plugin -D 详情配置向可见webpack03文件夹 


# 四. webpack mode选项
1. mode 可选值为 development, production

2. 使用sourcemap 调试, 能具体看到代码报错行数,精准定位错误

3. 使用npm install webpack-dev-server -D 热加载，能自动刷新浏览器。

# 五. 环境资源模块介绍

1. resource资源 (常用于.png 文件) asset/resource

2. inline资源 (常用于.svg文件) asset/line

3. source资源 (常用于.txt文件) asset/source

4. 通用资源类型  asset 基于resource资源和source资源之间大小判断
判断依据基于 paser下的 dataUrlCondition 的maxSize属性设置，默认值为 4 * 1024


# 六. loader
1. css loader 以及 style loader  加载顺序符合链式调用, 其他的less，和sass,等也可。

2.  1.npm install mini-css-extract-plugin -D  抽离css资源
    2.npm install css-minimizer-webpack-plugin -D  压缩css并且需要把mode的值更新为production

3. 加载image资源,直接可以使用

4. 加载font字体,加载xml, csv, yaml, toml, json5等，详情可看官网文档

总结： 让webapack去处理其他类型文件，转化成有效模块供我们使用。

#  七. 使用bable-loader
1. 把js代码解析成es5,兼容低版本浏览器，省去浏览器解析时间。 

#  八. 代码分离
1. 入口起点(使用entry配置手动地分离代码)

2. 防止重复(使用entry dependencies或者 splitchunksplugin)去重和分离代码

3. 动态导入(模块内联函数导入)   
