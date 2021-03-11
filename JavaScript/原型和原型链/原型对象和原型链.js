
// 原型对象：在 JavaScript 中，除去一部分内建函数，绝大多数的函数都会包含有一个叫做 prototype 的属性，指向原型对象，
// 基于构造函数创建出来的实例, 都可以共享访问原型对象的属性。（函数的prototype属性的值）


// 原型链：对象都有__proto__属性，该属性指向它的原型对象，原型对象也是对象，也有__proto__属性，指向原型对象的原型对象，这样一层一层形成的链式结构就是原型链。

// 构造函数
//   function Person (name, age) {
//     this.name = name
//     this.age = age

//      通用的一些方法, 如果直接添加给实例, 可以是可以, 但是浪费内存
//      所有创建的实例, 可以公用同一个sayHi方法
//     this.sayHi = function() {
//       console.log('你好哇')
//     }
//   }
//   let p1 = new Person('zs', 18)
//   let p2 = new Person('ls', 30)
//   console.log(p1.sayHi === p2.sayHi)

  
  // 构造函数  实例  原型
  function Person (name, age) {
    this.name = name
    this.age = age
  }
  // 添加到原型上的方法, 可以被所有的实例访问到
  Person.prototype.sayHi = function() {
    console.log('你好哇')
  }
  let p1 = new Person('zs', 18)
  let p2 = new Person('ls', 30)

  console.log(p1.sayHi === p2.sayHi)

