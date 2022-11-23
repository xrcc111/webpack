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