/* 

*/



const vm = new Vue({
  el: '.todoapp',
  data: {
    list: [
      {id: 1, name: '吃饭', done: true},
      {id: 2, name: '睡觉', done: false},
      {id: 3, name: '打豆豆', done: false}
    ]
  },
  methods: {
    delFn(id) {
      // console.log(id)
      this.list = this.list.filter(item => item.id !== id)
    },
    addFn(name) {
      let obj = {
        id: Date.now(),
        name,
        done: false
      }
      this.list.unshift(obj)
    },
    changeFn(id) {
      let item = this.list.find(item => item.id === id)
      item.done = !item.done
    },
    updateFn(id, name) {
      let item = this.list.find(item => item.id === id)
      item.name = name
    },
    clearFn() {
      this.list = this.list.filter(item => !item.done)
    },
    checkAllFn(value) {
      this.list.forEach(item => item.done = value)
    }
  }
})