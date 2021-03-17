
        // QQ的正则
        // 规律:
        //  纯数字
        //  5-12位
        //  第一位不能是0的数字
        //        [1-9]
        //        [^0] 有问题 

        // var reg = /^[^0]\d{4,11}$/; // error
        // var reg = /^[1-9]\d{4,11}$/;  // 对于表单校验的正则, 需要使用精确匹配, ^ $ 一起使用

        // console.log(reg.test("585409189"));
        // console.log(reg.test("085409189")); // false
        // console.log(reg.test("a85409189")); // false


        // 手机号正则
        // 规律:
        //  1. 1开头
        //  2. 11位纯数字
        //  3. 第二位不能是0 1 2 的数字 

        // var reg = /^1[3-9]\d{9}$/;
        // console.log(reg.test("13266774438"));
        // console.log(reg.test("18804992543"));
        // console.log(reg.test("11804992543"));
        // console.log(reg.test("188804992543"));


        // 邮箱的正则
        //  lwee@itcast.cn
        //  规律: 字母 大写字母 数字 _ @ 字母 大写字母 数字  . 小写字母
        /*var reg = /^\w+@\w+(\.[a-z]+)+$/;

        console.log( reg.test("lwee@itcast.cn") );
        console.log( reg.test("16_lwee@163.cn") );
        console.log( reg.test("16_lwee@163.com.cn") ); // */

        // 中文名
        //  中文: [\u4e00-\u9fa5]
        // 2-4位中文
        console.log( /^[\u4e00-\u9fa5]{2,4}$/.test("john") );
        console.log( /^[\u4e00-\u9fa5]{2,4}$/.test("大飞哥") );
        console.log( /^[\u4e00-\u9fa5]{2,6}$/.test("飞哥.约翰") );

