// ES7 标准中新增的 async 函数，从目前的内部实现来说其实就是 Generator 函数的语法糖。
// 它基于 Promise，并与所有现存的基于Promise 的 API 兼容。 

// async 关键字
// 1. async 关键字用于声明⼀个异步函数（如 async function asyncTask1() {...}） 
// 2. async 会⾃动将常规函数转换成 Promise，返回值也是⼀个 Promise 对象 
// 3. async 函数内部可以使⽤ await 

// await 关键字
// 1. await 用于等待异步的功能执⾏完毕 var result = await someAsyncCall() 
// 2. await 放置在 Promise 调⽤之前，会强制async函数中其他代码等待，直到 Promise 完成并返回结果 
// 3. await 只能与 Promise ⼀起使⽤
// 4. await 只能在 async 函数内部使⽤ 