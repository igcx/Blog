
// 箭头函数不同于传统函数，它其实没有属于⾃⼰的 this，
// 它所谓的 this 是, 捕获其外层  上下⽂的 this 值作为⾃⼰的 this 值。
// 并且由于箭头函数没有属于⾃⼰的 this ，它是不能被 new 调⽤的。

// 通过 Babel 转换前后的代码来更清晰的理解箭头函数:
// 转换前的 ES6 代码
    const obj = { 
        test() { 
        return () => { 
            console.log(this === obj)
        }
        } 
    }

// 转换后的 ES5 代码
    var obj = { 
        test: function getArrow() { 
        var that = this
        return function () { 
            console.log(that === obj)
        }
        } 
    }

    // 这里看到，箭头函数中的 this 就是它上层上下文函数中的 this