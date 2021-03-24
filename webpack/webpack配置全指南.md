# webpack的基本打包步骤

+ 项目初始化

```bash
yarn init -y
```

+ 安装webpack的依赖包

```bash
yarn add webpack webpack-cli -D
```

+ 在项目的根目录下面创建配置文件`webpack.config.js`

+ 去`package.json`中配置打包的脚本

```js
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```

+ 执行打包脚本

```bash
yarn build
```



# 配置webpack的打包入口

> 可以配置webpack对哪个文件进行打包,在`webpack.config.js`中

```js
module.exports = {
  // 指定webpack打包的入口， webpack对谁进行打包
  // entry: './src/index.js'
  entry: './src/aa.js'
}
```

# 配置webpack的打包出口

> 可以配置webpack将文件打包到哪里去

```js
const path = require('path')
// 导出了webpack的打包配置
module.exports = {
  output: {
    // 指定打包到哪个文件中，默认名字 main.js
    filename: 'bundle.js',
    // 指定打包到哪个文件夹，默认叫 dist文件
    // 必须指定绝对路径
    path: path.join(__dirname, 'lib')
  }
}
```



# 配置webpack的打包模式

```js
module.exports = {
  // 配置打包模式 
  // development: 开发阶段的打包模式, 会打包，不会压缩文件  更快
  // production: 生产阶段的打包模式, 会打包，并且对打包的文件进行压缩，费时
  mode: 'development'
}
```

# 配置html-webpack-plugin插件

> html-webpack-plugin插件会帮助我们在dist中自动生成一个html文件，自动把打的包引入

+ 安装

```js
yarn add html-webpack-plugin -D
```

+ 在`webpack.config.js`中配置这个插件

```js
// 导入html插件
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    // 配置插件
  plugins: [
    new HtmlWebPackPlugin({
      // 指定需要生成的html文件的模板
      template: './src/index.html'
    })
  ]
}
```



# 配置css-loader处理css文件

# 安装

css-loader: 可以让webpack处理css文件

style-loader: 可以让处理后的css代码插入到页面中

```bash
yarn add style-loader css-loader -D
```

+ 配置`webpack.config.js`文件

```js
module.exports = {
  module: {
    rules: [
      { 
      	test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```



