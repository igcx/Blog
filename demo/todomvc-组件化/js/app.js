/* 
  一：删除功能
    1. 给todos-main组件的删除按钮注册事件
    2. 获取到需要删除的id
    3. main组件把id传给父组件 （子传父）
    4. 父组件能够接收到id
    5. 父组件删除数据即可

  二：修改任务状态
    1. 不使用v-model, 使用：checked来控制选中状态
    2. 注册了一个change事件， 获取到id
    3. 把id传给父组件
    4。 父组件修改对应id的任务状态

  三：添加
    1. 在header组件给input注册keyup.enter事件
    2. 获取到input框的值
    3. 把值传给父组件
    4. 父组件接受并且添加

  四：修改任务名称
    1. 在main组件 双击显示框
    2. 取消要隐藏修改框
    3. 回车需要修改任务的名字，需要把修改的任务的id和名字传给父组件
    4. 修改任务名字即可。
*/

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'selected',
  linkExactActiveClass: 'selected'
})

const vm = new Vue({
  el: '.todoapp',
  data: {
    list: []
  },
  created () {
    this.list = JSON.parse(localStorage.getItem('todomvc')) || []
  },
  methods: {
    delFn (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    changeFn(id) {
      const todo = this.list.find(item => item.id === id)
      todo.done = !todo.done
    },
    addFn (name) {
      const obj = {
        id: Date.now(),
        name,
        done: false
      }
      this.list.unshift(obj)
    },
    updateFn(id, name) {
      const todo = this.list.find(item => item.id === id)
      todo.name = name
    },
    clearFn () {
      this.list = this.list.filter(item => !item.done)
    },
    checkAllFn(value) {
      this.list.forEach(item => item.done = value)
    }
  },
  watch: {
    list: {
      deep: true,
      handler(value) {
        localStorage.setItem('todomvc', JSON.stringify(value))
      }
    }
  },
  router,
  computed: {
    showList () {
      const { path } = this.$route
      // console.log(path);
      // const path = this.$route.path
      if (path === '/active') {
        return this.list.filter(item => !item.done)
      } else if (path === '/completed') {
        return this.list.filter(item => item.done)
      } else {
        return this.list
      }
    }
  }
})