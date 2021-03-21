/* 
promise 是es6的新语法
用于创建一个promise对象，创建一个promise对象，就相当于我们许下了一个承诺。


*/
const fs = require('fs')

// const p = new Promise(function(resolve, reject) {
//   /* 
//   resolve 和 reject 是两个函数。
//   我们在方法体里面实现异步逻辑。
//   当异步逻辑 成功的时候 我们调用 resolve方法，并且可以把成功的数据传递出来。
//   当我们异步逻辑失败的时候 我们调用 reject 方法，别切可以把错误新传递出来。
  
//   */
//   fs.readFile('a.txt', 'utf8', (err, data) => {
//     if (err) return reject(err)
//     resolve(data)
//   })

// })

// // then 成功的时候会调用
// // catch 失败的时候会调用
// p.then(function(data) {
//   console.log(data)
// }).catch(function(err) {
//   console.log(err)
// })

function read(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

// promise以链式方式调用，解决了回调函数嵌套的 回调地狱问题。
read('a.txt').then(data=>{
  console.log(data)
  return read('b.txt')
}).then(data => {
  console.log(data)
  return read('c.txt')
}).then(data => {
  console.log(data)
})


// let a = '1'
// const b = 2

