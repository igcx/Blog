        // 正则表达式: 匹配规律规则的表达式
        // 创建正则表达式
        // 1. 构造函数 RegExp
        var reg = new RegExp(/a/); // 正则匹配含有字母a

        // 正则对象.test(字符串);
        //  test() 测试字符串是否符合正则表达式的规律, 如果符合返回true

        // console.log(reg.test("abc"));
        // console.log(reg.test("123"));

        // 2. 字面量写法:  /a/
        var reg2 = /1/;
        console.log( reg2.test("abc") ); // false
        console.log( reg2.test("a1bc") ); // true