/* 
sync:同步
async: 异步
async 是一个关键字 ， 用在函数的前面，用于标识当前函数是一个异步函数。
await 也是一个关键字， 用在async函数中。 等待一个值， 当等待值是一个 普通值，会直接获取到这个值。 如果等待的 是一个 promise 对象，那么 会直接阻塞 当前异步函数的执行 ，直到 得到promise的结果。

*/

const fs = require('fs')


function read(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}


console.log(1)

async function fn() {
  // console.log(2)

  // async函数中 需要有 await 等待，才会真正 异步。
  // let num = await 2
  // console.log(num)

  let data1 = await read('a.txt')
  console.log(data1)

  let data2 = await read('b.txt')
  console.log(data2)

  let data3 = await read('c.txt')
  console.log(data3)
}
fn()

console.log(3)