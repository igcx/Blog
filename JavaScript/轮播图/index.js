      // 获取元素
      let points = document.querySelector('.points');
      let carousel = document.querySelector('.carousel');
      let ul = carousel.querySelector('ul');
      let pics = ul.querySelectorAll('li');

      // 2.动态创建小圆点 => 这个步骤必须放在1前面 获取小圆点的代码一定要放在生成的后面
      // 2.1 遍历图片的张数（pics）
      // 2.2 每遍历一个就动态创建一个li出来
      // 2.3 每创建出来一个就追加到ol里面去
      // 2.4 在循环的时候进行 i 的判断 如果 i 为0  就给这个 li 添加一个 active类
      for (let i = 0; i < pics.length; i++) {
        let li = document.createElement('li');
        // 给第一个li添加active类
        if (i === 0) {
          li.className = 'active';
        }
        // 每创建一个li就添加一个li
        points.appendChild(li);
      }

      // 注意点: 获取小圆点的代码一定要在创建之后
      let pointsLis = points.querySelectorAll('li');
      // 1.点击小圆点实现移动效果
      // 1.1 找对象
      // 1.2 批量给小圆点注册点击事件
      // 1.3 给小圆点绑定下标
      // 1.4 点击的时候获取对应的下标, 利用下标 * 一张图片的宽度
      // 1.5 将这个取值设置给ul的left(负值)
      // 1.6 引入animate动画 改写ul的left
      // 1.7 给小圆点进行排他
      for (let i = 0; i < pointsLis.length; i++) {
        // 存下标
        pointsLis[i].setAttribute('index', i);
        pointsLis[i].onclick = function () {
          // 获取当前元素的index下标
          // 如果通过setAttribute设置的 必须通过getAttribute获取的
          let _index = this.getAttribute('index');
          // 同步下标
          clickIndex = _index;
          pointIndex = _index;
          animate(ul, -_index * carousel.offsetWidth, 40);
          // 小圆点排他
          for (let i = 0; i < pointsLis.length; i++) {
            pointsLis[i].className = '';
          }
          // 复活他自己
          this.className = 'active';
        };
      }

      // 需求3: 点击右按钮实现轮播效果
      // 3.1 设置一个变量模拟下标
      // 3.2 每点击一次让下标自增1
      // 3.3 调用animate函数移动ul的位置
      // 3.4 实现无缝轮播 => (复制第0张图片 追加到最后作为临时工, 当移动到临时工的时候,下一次点击直接跳从临时工跳转到第一张图片上,然后再自增 滑动到第二张)
      // 3.5 利用代码克隆第一张图片, 追加到ul里面去
      // 克隆第一张图片作为临时工
      ul.appendChild(pics[0].cloneNode(true));

      let rightBtn = document.querySelector('.arrow-r');
      // 这个下标是用来控制 ul 的移动
      let clickIndex = 0;
      // 这个下标是用来控制小圆点的排他
      let pointIndex = 0;
      // 设置一个阀门
      let flag = true;
      rightBtn.onclick = function () {
        if (flag) {
          // 关闭阀门
          flag = false;
          // console.log(clickIndex);
          // console.log(pics.length);
          // 在自增前面进行判断 是为了无缝滚动瞬间移动到第一张图片的位置 然后顺势自增
          if (clickIndex > pics.length - 1) {
          // 瞬间回到 0 的位置
            ul.style.left = 0;
            clickIndex = 0;
          }
        // 顺势自增
          clickIndex++;
          animate(ul, -clickIndex * carousel.offsetWidth, 40, function () {
            // 在动画结束之后重新开启阀门
            flag = true;
          });
        // 让小圆点下标自增
          pointIndex++;

          // 极值判断
          if (pointIndex > pointsLis.length - 1) {
            pointIndex = 0;
          }

          // 小圆点排他
          for (let i = 0; i < pointsLis.length; i++) {
            pointsLis[i].className = '';
          }
          // 复活他自己
          pointsLis[pointIndex].className = 'active';
        }
      };

      // 需求4: 左按钮点击效果
      let leftBtn = document.querySelector('.arrow-l');
      leftBtn.onclick = function () {
        if (flag) {
          flag = false;
          // console.log(clickIndex);
          // console.log(pics.length);

          if (clickIndex <= 0) {
            ul.style.left = -pics.length * carousel.offsetWidth + 'px';
            clickIndex = pics.length;
          }

          clickIndex--;
          animate(ul, -clickIndex * carousel.offsetWidth, 40, function () {
            flag = true;
          });

          pointIndex--;

          // 极值判断
          if (pointIndex < 0) {
            pointIndex = pointsLis.length - 1;
          }

          // 小圆点排他
          for (let i = 0; i < pointsLis.length; i++) {
            pointsLis[i].className = '';
          }
          // 复活他自己
          pointsLis[pointIndex].className = 'active';
        }
      };

      // 5.自动轮播
      // 1. 利用定时器自动轮播
      // 2. 鼠标移上carousel清除定时器
      // 3. 鼠标离开carousel重新启动定时器
      let timerId = setInterval(function () {
        // 调用右侧按钮的点击效果
        rightBtn.onclick();
      }, 2000);
      carousel.onmouseover = function () {
        clearInterval(timerId);
      };
      carousel.onmouseout = function () {
        // 重新启动定时器 注意：不要添加 let 或者 var
        timerId = setInterval(function () {
          // 调用右侧按钮的点击效果
          rightBtn.onclick();
        }, 2000);
      };