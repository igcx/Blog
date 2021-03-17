       // 字符类元字符 []
        // [] 表示是一个字符, 在[] 里面可以写这个位置能出现的字符
        //  [] 自带或者的含义
        //  [] 里面可以 -  表示范围
        //  [] 里面可以 ^ [^]  表示 非

        // /[abc]/ 表示匹配a或者b或者c 是abc其中任意一个
        // /[^abc]/ 表示匹配非abc的任意字符,  除了abc的
        // /[a-h]/  表示匹配a到h的任意一个字符
        // /[a-z]/  表示匹配a到z的任意一个字符
        // /[A-Z]/  表示匹配A到Z的任意一个字符

        // console.log( /[abc]/.test("123") );
        // console.log( /[abc]/.test("1a23") );
        // console.log( /[abc]/.test("1f23") );
        // console.log( /[a-h]/.test("1f23") );
        // console.log( /[A-h]/.test("1k2b3") ); // 可以的
        // console.log( /[h-a]/.test("1k23") ); // error

        // console.log( /[^0]/.test("000") ); // false
        // console.log( /[^0]/.test("0.12") ); // true
        // console.log( /[^0]/.test("abc") ); // true


        // [] 字符类元字符
        //  [a-z] 范围 可以自定义, 但是范围不能反过来
        //  [^]  非
        //  [] 自带或者含义

        //  [a-zA-Z0-9]   匹配a-z A-Z 0-9的任意一个字符
        console.log( /[a-zA-Z6-9]/.test("h3") ); // true
        console.log( /[a-zA-Z6-9]/.test("H8") ); // true
        console.log( /[k-zA-Z6-9]/.test("2h") ); // false


        
        // 需求: 匹配以a开头
        // 开始: ^     [^] 非
        // 结尾: $

        // ^
        // console.log( /^chuan/.test("dachuan") ); // false
        // console.log( /^chuan/.test("chuang") ); // true
        // console.log( /^chuan/.test("chuanchuan") ); // true

        // $
        // console.log( /chuan$/.test("dachuan") ); // true
        // console.log( /chuan$/.test("chuang") ); // false
        // console.log( /chuan$/.test("chuanchuan") ); // true

        // ^ $ 一起使用 精确匹配 写啥匹配啥 ==> 用于表单校验中
        console.log( /^chuan$/.test("dachuan") ); // false
        console.log( /^chuan$/.test("chuang") ); // false
        console.log( /^chuan$/.test("chuanchuan") ); // false
        console.log( /^chuan$/.test("chuan") ); // true



       // 量词类元字符
        // * 次数是 >=0        {0,}
        // + 次数是 >=1        {1,}
        // ? 次数是0 或 1      {0,1}
        // {m} =m次
        // {m,} >=m次
        // {m,n} m到n次, 包含m和n的


        // * >= 0
        // a有0次 a有1个以上
        /*console.log( /^a*$/.test("") ); // true   符合a为0次的时候
        console.log( /^a*$/.test("a") ); // true
        console.log( /^a*$/.test("aa") ); // true
        console.log( /^a*$/.test("abc") ); // false*/

        // + >= 1
        // a最少有一个
        /*console.log( /^a+$/.test("") ); // false
        console.log( /^a+$/.test("a") ); // true
        console.log( /^a+$/.test("aa") ); // true
        console.log( /^a+$/.test("abc") ); // false*/

        // ?  0 1
        // console.log( /^a?$/.test("") ); // true
        // console.log( /^a?$/.test("a") ); // true
        // console.log( /^a?$/.test("aa") ); // false
        // console.log( /^a?$/.test("abc") ); // false

        // {}
        // 注意: 量词就近修饰
        console.log( /chuan{2}/.test("chuanchuan") ); // false
        console.log( /chuan{2}/.test("chuann") ); // true
        console.log( /(chuan){2}/.test("chuanchuan") ); // true