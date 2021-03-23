
// this 是一个在运行时才进行绑定的引用，在不同的情况下它可能会被绑定不同的对象。

// 全局对象的 this 指向 window 对象
// 全局函数执行 this 指向 window
// this 永远指向最后调用它的那个对象
// new 关键词改变了 this 指向
// apply call bind 可以改变 this 指向
// 箭头函数的 this 在定义时确定
// 匿名函数的 this 永远指向 window


// 默认绑定 (指向window的情况)  (函数调用模式 fn() )
// 默认情况下， this 会被绑定到全局对象上，比如在浏览器环境中就为 window 对象，在node.js环境下为 global 对象。
// 如下代码展示了这种绑定关系：
    message = "Hello"; 

    function test () { 
    console.log(this.message); 
    }

    test() // "Hello"



// 隐式绑定 (谁调用, this指向谁) (方法调用模式 obj.fn() )
// 如果函数的调用是从对象上发起时，则该函数中的 this 会被自动隐式绑定为对象：
    function test() {
        console.log(this.message); 
    }

    let obj = {
    message: "hello,world",
    test: test
    }

    obj.test() // "hello,world"



// 显式绑定 (又叫做硬绑定)  (上下文调用模式, 想让this指向谁, this就指向谁)
// 硬绑定 => call  apply  bind
// 可以显式的进行绑定：
    function test() {
        console.log(this.message); 
    }

    let obj1 = {
    message: "你好世界123"
    }

    let obj2 = {
    message: "你好世界456"
    }

    test.bind(obj1)() // "你好世界123"
    test.bind(obj2)() // "你好世界456"

    

// new 绑定 (构造函数模式)
// 另外，在使用 new 创建对象时也会进行 this 绑定
// 当使用 new 调用构造函数时，会创建一个新的对象并将该对象绑定到构造函数的 this 上：
    function Greeting(message) {
        this.message = message;
    }

    var obj = new Greeting("hello,world")
    obj.message // "hello,world"