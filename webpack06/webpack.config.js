const path = require('path') // 引入node的内置npm 模块path
const HtmlWebpackPlugin = require('html-webpack-plugin')  //控制html文件的打包工具
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 打包抽离的css文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') //用于压缩css文件

module.exports = {
  entry: './src/index.js', // 入口文件

  output: {  // 输出文件配置
    filename : 'bundel.js', // 文件名称
    path: path.resolve(__dirname,  './dist'), // 因为需要绝对路径，所以采用node内置的npm模块path
    clean: true, // 清理上次打包的静态资源
   // assetModuleFilename: 'images/test.png' //自定义静态资源的文件路径以及文件名
   assetModuleFilename: 'images/[contenthash][ext]'
  },

  devtool: 'inline-source-map', // 能看到开发环境下代码报错信息，具体行数

  mode: 'development', // 用来区分开发和生产环境
  //mode: 'production', //切换为生产环境用于CssMinimizerWebpackPlugin来压缩css资源

  plugins: [
    new HtmlWebpackPlugin({
      // 配置选项
      template: './index.html', //打包模板
      filename: 'app.html', // 生成模板
      inject: 'body', // 打包位置
    }),

    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css', //自定义打包抽离的css文件名和文件路径
    })
  ],

  devServer: {
    static: './dist'
  },

  // 模块资源
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]' //此处的优先级高于output的优先级
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/,
        type: 'asset/source'        
      },
      {
        test: /\.jpg$/,
        type: 'asset', // 通用模块
        parser: {
          dataUrlCondition: {
            // maxSize: 4 * 1024, webpack的默认值
            maxSize: 4 * 1024 * 1024, // 低于4M生成base64,不打包到配置的静态资源里
          }
        }       
      },
      {
        test: /\.(css|less)$/,
       // use: ['style-loader','css-loader', 'less-loader'] // 安装css-loader 和 style-loader ,而且安装顺序不能颠倒，符合链式调用规范
       use: [MiniCssExtractPlugin.loader,'css-loader', 'less-loader'] //使用MiniCssExtractPlugin这个loader
      },
      {
        test: /\.(woff|woff2|eto|ttf|otf)$/, //加载字体配置 
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/, //加载字体配置 
        use: 'csv-loader'
      },
      {
        test: /\.xml$/, //加载字体配置 
        use: 'xml-loader'
      },
    ]
  },

  // 优化选项
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  }
}