const path = require('path') // 引入node的内置npm 模块path

module.exports = {
  entry: './src/index.js', // 入口文件

  output: {  // 输出文件配置
    filename : 'bundel.js', // 文件名称
    path: path.resolve(__dirname,  './dist'), // 因为需要绝对路径，所以采用node内置的npm模块path
  },

  mode: 'none'
}