// 演示es6的语法
// console.log('123') 

/* 
  import : 导入
    import '模块名字'  仅仅代表导入某个模块  相当于 require('模块名')
    import { 想要导入的内容 } from '模块名'
    import 变量 from '模块名'
  export : 导出
    export const num = 11;
    export function fn() {}
*/
// import './a'
// import { num, name, fn, aa } from './a'
// console.log(num);
// console.log(name);
// console.log(fn);
// console.log(aa);

// import {} from './b'
// import cc from './b'
// console.log(cc);
import obj, {b} from './c'
console.log(obj, b);