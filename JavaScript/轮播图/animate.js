/* *
 * animate: 实现移动动画
 * 参数:
 * 1. element => 移动的DOM对象
 * 2. target => 目标坐标
 * 3. step => 步长
 * 4. callback => 动画结束的回调函数
 */

function animate(element, target, step, callback) {
  // 在这里进行判定 (因为需要用最开始的初始位置和结束位置做比较)
  step = element.offsetLeft > target ? -step : step;
  // 每一次开启之前清除一下上一次的定时器
  clearInterval(element.timerId);
  // 开启定时器
  element.timerId = setInterval(function () {
    // 判断条件
    // 判断是否到底终点 (这段代码需要在定时器里面判定,因为需要获取当前最新的当前位置)
    // var flag =
    //   step > 0
    //     ? element.offsetLeft >= target
    //     : element.offsetLeft <= target;

    // 判断是否到底终点优化方式 (如果距离小于了步长,那么意味着快要到达终点咯)
    var flag = Math.abs(element.offsetLeft - target) <= Math.abs(step);
    if (flag) {
      // 暴力解决
      element.style.left = target + 'px';
      // 清除定时器
      clearInterval(element.timerId);
      // 执行回调函数
      // if (callback) {
      //   callback();
      // }
      callback && callback();
      // 阻止代码继续往下运行
      // return;
    } else {
      element.style.left = element.offsetLeft + step + 'px';
    }
  }, 15);
}
