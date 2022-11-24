const path = require('path') // 引入node的内置npm 模块path
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 入口文件

  output: {  // 输出文件配置
    filename : 'bundel.js', // 文件名称
    path: path.resolve(__dirname,  './dist'), // 因为需要绝对路径，所以采用node内置的npm模块path
    clean: true // 清理上次打包的静态资源
  },

  mode: 'none', // 用来区分开发和生产环境

  plugins: [
    new HtmlWebpackPlugin({
      // 配置选项
      template: './index.html', //打包模板
      filename: 'app.html', // 生成模板
      inject: 'body', // 打包位置
    })
  ]
}