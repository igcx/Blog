
        // 正则替换  replace()
        //  replace 第一个参数可以写正则表达式

        // var str = "abc";
        // var str2 = str.replace("c", "x");
        // console.log(str2);

        var str = "   123AD  asadf   asadfasf  adf  ";
        // 1  替换掉字符串中的所有空白
        //   g global 全局匹配搜索
        // var str2 = str.replace(/\s/g, "");
        // console.log(str2);

        // 2. 将所有的ad/AD替换成xx
        //  i ignore 忽略大小写
        // var str3 = str.replace(/ad|AD/g, "xx");
        var str3 = str.replace(/ad/gi, "xx");
        console.log(str3);

        // replace 是字符串的方法, 第一个参数可以写正则
        // test是正则的方法 , 测试


