
        // 历史上出现过的跨域⼿段有很多，主要了解3种跨域⽅案：
        // - JSONP
        // - CORS
        // - 服务器代理(webpack代理, Nginx反向代理)

        //     JSONP 
        // 这是一种非常经典的跨域方案，它利用了<script>标签不受同源策略的限制的特性，实现跨域效果。
        // 优点：
        // - 实现简单
        // - 兼容性好
        // 缺点：
        // - 只支持 GET 请求 （因为 <script> 标签只能发送 GET 请求）
        // - 存在被 XSS 攻击的可能，缺乏安全性保证
        // - 需要服务端配合改造
        // axios中不支持 JSONP, 如果在开发中, 需要发送 JSONP 请求, 可以用 jsonp 插件

        //     CORS (主流)
        // 跨域资源共享（CORS），这是⽬前比较主流的跨域解决⽅案，
        // 它利用一些额外的 HTTP 响应头来通知浏览器, 允许访问来自指定 origin 的非同源服务器上的资源。
        // Node.js 的 Express 框架的设置代码 (Java, PHP等, 配置代码差不多)：
             // 创建一个 CORS 中间件 
             function allowCrossDomain(req, res, next) { 
                res.header('Access-Control-Allow-Origin', 'http://example.com'); 
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
                res.header('Access-Control-Allow-Headers', 'Content-Type'); 
                next(); 
                }
            
                //...
            
                app.configure(function() { 
                // ...
                
                // 为 Express 配置 CORS 中间件
                app.use(allowCrossDomain); 
                
                // ...
                });
                // 所以, 开发中或上线时遇到跨域, 如果不考虑兼容性问题 (IE10+)
                // 优先让后台配置个 CORS 解决即可, 简单快捷!


        //     代理服务器
        // 说明: 同源策略, 是浏览器的安全策略, 服务器于服务器之间, 没有跨域问题! 所以可以利用代理服务器转发请求!
        // 1. 开发环境的跨域问题 (使用webpack代理服务器解决)
        // 配置 devServer 的 proxy 配置项
            // module.exports = {
            //     devServer: {
            //      // 代理配置
            //       proxy: {
            //           // 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制
            //           '/api': {
            //             target: 'www.baidu.com', // 我们要代理请求的地址
            //              // 路径重写
            //             pathRewrite: {
            //                 // 路径重写  localhost:8888/api/login  => www.baidu.com/api/login
            //                 '^/api': '' // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做 
            //             }
            //         },
            //       }
            //     }
            //   }
        //  2. 生产环境的跨域问题 (使用 nginx 服务器代理)
     

