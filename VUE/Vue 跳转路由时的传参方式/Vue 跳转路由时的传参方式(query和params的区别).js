// 1. 通过 query 传参
    this.$router.push('/login?username=pp&age=18&desc=xx')

    this.$router.push({
        path: '/login',
        query: {
            username: 'pp',
            age: 18,
            desc: 'xxx'
        }
    })

    this.$router.push({
        name: 'login',
        query: {
            username: 'pp',
            age: 18,
            desc: 'xxx'
        }
    })
// 获取: this.$route.query.username


// 2. 通过 params 传参, 必须通过命名路由的方式传递!
    this.$router.push({
        name: 'login',
        params: {
            username: 'pp',
            age: 18
        }
    })
// 获取: this.$route.params.username

// 区别:
    // 1. params传参, 必须要用命名路由的方式传值
    // 2. params传参, 不会显示在地址栏中, 刷新会丢失
    // 可以配合 localStorage 使用
    // (1) A 跳转路由到 B, 通过 params 传值
    // (2) B 页面中, 立刻通过  this.$route.params 获取参数  
    // ​      (获取参数的逻辑, 优先从$route中拿, 如果拿不到(说明刷新了), 从本地取即可)
    // (3) 拿到参数后, 立刻存到本地 (保证刷新丢失后, 还能从本地拿)
    // (4) 实现功能...


    // B页面的逻辑
    created () {
        let username = this.$route.params.username
        if (username) {
            // 刚跳过来, 有参数, 立刻存起来
            localStorage.setItem('myParams', JSON.stringify(this.$route.params))
        } else {
            // 没有, 说明用户刷新了, 丢失了params, username参数, 本地拿
            username = JSON.parse(localStorage.getItem('myParams')).username
        }
    }