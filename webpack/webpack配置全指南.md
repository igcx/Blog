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



# 配置less-loader处理less文件

+ 安装

```js
yarn add less-loader less -D
```

+ 配置

```js
// 配置less-loader
{
  test: /\.less$/,
  use: ["style-loader", "css-loader", "less-loader"]
}
```



# 配置file-loader处理图片

+ 安装

```js
yarn add file-loader -D
```

+ 配置

```js
// 配置file-loader用于处理图片
{
  test: /\.(jpg|png|gif)$/,
  use: 'file-loader'
}
```



# 配置url-loader处理图片

+ 安装

```js
yarn add url-loader file-loader -D
```

+ 配置

```js
{
  test: /\.(jpg|png|gif)$/,
  use: {
    loader: 'url-loader',
    options: {
      // 如果图片小于30kb，就会使用url-loader处理，否则就会使用file-loader处理
      limit: 20 * 1024
    }
  }
}
```

# 字体图标和音频视频

+ 和处理图片一样，都使用url-loader即可。



# 配置了babel-loader处理高版本的JS语法

 https://webpack.js.org/loaders/babel-loader/ 

+ 安装

```js
yarn add -D babel-loader @babel/core @babel/preset-env
```

+ 配置

```js
{
  test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
      }
}
```



# 配置mini-css-extract-plugin提取css

+ 安装

```js
yarn add -D mini-css-extract-plugin
```

+ 配置

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  // 配置插件
  plugins: [
    new MiniCssExtractPlugin()
  ],
    
  // 配置loader
  // 配置css-loader
    {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
  },
    // 配置less-loader
    {
    test: /\.less$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
  },
```



# 优化了css的路径和名字

![image-20200824104806307](images/image-20200824104806307.png)

![image-20200824104829185](images/image-20200824104829185.png)



# 优化文件的输出路径

![image-20200824105517622](images/image-20200824105517622.png)



# 配置了webpack-dev-server

作用：

	1. 启动一个服务器
 	2. 监视代码，自动打包，会自动刷新浏览器
 	3. 自动打开浏览器

+ 安装

```js
yarn add webpack-dev-server -D
```

+ 配置新的脚本

```js
	"scripts": {
    "build": "webpack --config webpack.config.js",
    "serve": "webpack-dev-server --config webpack.config.js"
  },
```

+ 配置webpack-dev-server

```js
  // 配置dev-server
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 8888
  }
```



# ES6的模块化语法

+ export导出

```js
 // a.js
export const num = 11;
export const name = 'zs';

// main.js
import {num, name} from './a';

```

+ export default 默认导出

```js
// a.js
const num = 11;
const name = 'zs';

export default {
  num,
  name
}

// main.js
import abc from './a'
console.log(abc)
```





# 介绍了vue的单文件组件

> 一个vue文件就是一个组件，，，，以后定义组件通难过`.vue`文件来定义

```vue
<template>
	结构能够高亮
</template>

<script>
export default {
  
}
</script>

<style>
	能够去写样式
</style>
```

+ 安装一个vscode的插件`vetur`

快捷键`vue`



# webpack处理vue单文件组件

+ index.html文件中需要提供一个挂载点

![image-20200824122916640](images/image-20200824122916640.png)

+ 创建`App.vue`作为根组件

```js
<template>
  <div class="app">
    <p>123 ---{{msg}}</p>
  </div>
</template>

<script>
// 导出一个组件的配置
export default {
  data () {
    return {
      msg: '123456'
    }
  }
}
</script>

<style>
  .app {
    background-color: red;
  }
</style>
```

+ 在`main.js`中渲染App.vue

```js
// 引入vue模块
import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
  // 会直接创建一个App.vue作为根组件
  // 如何把app.vue渲染成为根组件
  // render: function (createElement) {
  //   return createElement(App)
  // },
  // 把App渲染为根组件
  el: '#app',
  render: c => c(App)
})
```

+ 启动服务器会报错，==因为webpack此时不识别vue文件==
+ 配置vue-loader

```js
npm install -D vue-loader vue-template-compiler
```

+ 在`webpack.config.js`配置文件

```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
```

