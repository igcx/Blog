const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // 打包入口
  entry: './src/main.js',
  // 打包的出口
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  // 打包模式
  // development production
  mode: 'development',
  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 指定生成的css的路径和文件名
      filename: './css/index.css'
    })
  ],
  // 配置loader
  module: {
    rules: [
      // 配置css-loader
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader']
      },
      // 配置less-loader
      {
        test: /\.less$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, "css-loader", "less-loader"]
      },
      // 配置file-loader用于处理图片
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   use: 'file-loader'
      // },
      // 配置url-loader用于处理图片
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 如果图片小于30kb，就会使用url-loader处理，否则就会使用file-loader处理
            limit: 5 * 1024,
            // 指定输出路径
            outputPath: './images',
            name: '[name].[ext]'
          }
        }
      },
      // 处理字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 如果图片小于30kb，就会使用url-loader处理，否则就会使用file-loader处理
            limit: 5 * 1024,
            outputPath: './fonts',
            // 生成的名字和原来一样
            name: '[name].[ext]'
          }
        }
      },
      // 处理音频和视频
      {
        test: /\.(mp3|mp4|ogg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 如果图片小于30kb，就会使用url-loader处理，否则就会使用file-loader处理
            limit: 5 * 1024
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // 配置dev-server
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 8888
  }
}