

        // 正则的组成 // 里面能写啥
        // 1. 普通字符 没有实际含义,写啥匹配啥
        // 2. 元字符   有实际的含义

        // 1. \d   匹配任意一个数字 0-9

        // console.log( /\d/.test("abc") ); // false
        // console.log( /\d/.test("a1bc") ); // true
        // console.log( /\d/.test("123") ); // true

        // 2. \D   匹配任意一个非数字

        // console.log( /\D/.test("abc") ); // true
        // console.log( /\D/.test("a1bc") ); // true
        // console.log( /\D/.test("123") ); // false

        // 3. \w   匹配单词字符  a-z A-Z 0-9 _
        // 4. \W   匹配非单词字符

        // console.log( /\w/.test("abc") );  // true
        // console.log( /\w/.test("_123") ); // true
        // console.log( /\w/.test(",,,,") ); // false
        // console.log( /\w/.test("   ") ); // false

        // console.log( /\W/.test("abc") );  // false
        // console.log( /\W/.test("_123") ); // false
        // console.log( /\W/.test(",,,,") ); // true
        // console.log( /\W/.test(",a,,,") ); // true
        // console.log( /\W/.test("   ") ); // true

        // 5. \s   匹配不可见字符  空格  换行(\n) 制表符tab (\t)
        // console.log( /\s/.test("abc") );  // false
        // console.log( /\s/.test("a\nbc") ); // true
        // console.log( /\s/.test(",,,,") ); // false
        // console.log( /\s/.test("   ") ); // true
        // console.log( /\s/.test("  a ") ); // true

        // 6. \S  匹配可见字符
        // console.log( /\S/.test("abc") );  // true
        // console.log( /\S/.test("a\nbc") ); // true
        // console.log( /\S/.test(",,,,") ); // true
        // console.log( /\S/.test("   ") ); // false
        // console.log( /\S/.test("  a ") ); // true


        // 7. .  匹配除了换行的任意字符
        // 8. 对点. 进行转义   \.  只是表示点自己本身
        // console.log( /./.test("12.4") );  // true
        // console.log( /./.test("abc") ); // true
        // console.log( /./.test(",,,,") ); // true
        // console.log( /./.test("\n") ); // false

        console.log( /\./.test("12.4") );  // true
        console.log( /\./.test("abc") ); // false
        console.log( /\./.test(",,,,") ); // false
        console.log( /\./.test("\n") ); // false

