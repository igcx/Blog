/* 
一、用vue管理我们的项目
  创建vue实例
二、渲染列表
  1、v-for
  2、在created 钩子函数中 进行 ajax请求
  3、请求ajax 用的是 axios
三、新增数据
  1、v-model 双向绑定 input
  2、绑定input keyup.enter
  3、事件执行的函数中，进行 请求 添加数据
四、删除功能
  1、给删除按钮绑定事件
  2、在事件执行的函数中接收id
  3、通过axios 进行删除
  4、重新拉取列表
五、修改数据状态
  1、给checkbox 注册了 change事件
  2、事件执行的函数中 ，进行api 请求。
  注意我们只更新了 done 属性， 其他的内容没有变化 ，我们用patch 方式请求
六、修改数据内容
  1、双击显示input，保存原始值
  2、给input注册事件 keyup.enter 
  3、在 keyup.enter  事件执行函数中 请求 api 
  4、重新拉取列表数据
  5、esc 取消修改
七、清除完成
  1、给按钮绑定事件
  2、在事件执行的函数中 ，遍历数组，进行请求删除 api
*/

const vm = new Vue({
  el: '.todoapp',
  data: {
    list: [],
    name: '',
    clickId: '',
    clickName: ''
  },
  methods: {
    getAll(){
      axios({
        method: 'get',
        url: `http://localhost:3000/todos`
      }).then(res => {
        this.list = res.data
      })
    },
    add() {
      // console.log(this.name)
      axios({
        method: 'post',
        url: `http://localhost:3000/todos`,
        // 接口提交的数据写在 data 中
        data: {
          name: this.name,
          done:false
        }
      }).then(res => {
        // console.log(res)
        this.getAll()
        this.name = ''
      })
    },
    del(id) {
      // console.log(id)
      axios({
        method: 'delete',
        url: `http://localhost:3000/todos/${id}`,
      }).then(res => {
        this.getAll()
      }) 
    },
    change(id, done) {
      // console.log(id, done)
      axios({
        method: 'patch',
        url: `http://localhost:3000/todos/${id}`,
        data: {
          done
        }
      }).then(res => {
        this.getAll()
      }) 
    },
    show(id, name) {
      // console.log(id, name)
      this.clickId = id
      this.clickName = name
    },
    update(id, name) {
      axios({
        method: 'patch',
        url: `http://localhost:3000/todos/${id}`,
        data: {
          name
        }
      }).then(res => {
        this.clickId = ''
        this.getAll()
      }) 
    },
    cancel() {
      this.clickId = ''
      this.getAll()
    },
    clear() {
      this.list.forEach(item => {
        if (item.done) {
          this.del(item.id)
        }
      });
    }
  },
  created() {
    this.getAll( )
  }
})