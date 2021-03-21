
    // 思路
    // 1. 给window注册scroll事件, 获取被卷曲的高度
    // 2. 使用被卷曲的高度和topPart的高度作比较
    // 3. 大于等于topPart的高度 就给navBar添加一个fixed类名
    // 4. 小于topPart的高度 就给navBar清除fixed类名
    // 5. 需要给mainPart盒子设置一个margin-top值 防止navBar从标准流变成定位流之后mainPart跳动问题

    var topPart = document.querySelector('#topPart');
    var navBar = document.querySelector('#navBar');
    var mainPart = document.querySelector('#mainPart');
    var marginTop = parseInt(window.getComputedStyle(mainPart).marginTop);

    // 固定写法
    window.onscroll = function () {
      // 获取页面被卷曲的高度
      var _scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        docuemnt.body.scrollTop;

      if (_scrollTop >= topPart.offsetHeight) {
        navBar.className = 'nav fixed';
        mainPart.style.marginTop = marginTop + navBar.offsetHeight + 'px';
      } else {
        navBar.className = 'nav';
        mainPart.style.marginTop = marginTop + 'px';
      }
    };