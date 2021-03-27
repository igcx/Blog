const num = 11
const name = '张三'
function fn() {
  console.log('哈哈哈');
}

// 每一个模块除了可以用export进行导出之外，还可以有一个默认导出 export default
// module.exports = {}
export default {
  num,
  name,
  fn
};