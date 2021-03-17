       // 正则的优先级
        // 或者 |  优先级最低
        // 分组 () 优先级最高

        // 匹配a或者b或者c
        // console.log( /a|b|c/.test("123") ); // false
        // console.log( /a|b|c/.test("12f3") ); // false
        // console.log( /a|b|c/.test("12c3") ); // true


        // 正则匹配啥: | 优先级最低, |的两边理解都是单独的整体
        // 匹配f或者是boot
        // console.log( /f|boot/.test("foo") ); // true
        // console.log( /f|boot/.test("boo") ); // false
        // console.log( /f|boot/.test("boot") ); // true
        // console.log( /f|boot/.test("foot") ); // true
        // console.log( /f|boot/.test("f") ); // true

        // 匹配foot 或 boot
        console.log( /(f|b)oot/.test("foo") ); // false
        console.log( /(f|b)oot/.test("boo") ); // false
        console.log( /(f|b)oot/.test("boot") ); // true
        console.log( /(f|b)oot/.test("foot") ); // true
        console.log( /(f|b)oot/.test("f") ); // false