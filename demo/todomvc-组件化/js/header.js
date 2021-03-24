Vue.component('todos-header', {
  template: `
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="add" v-model="name">
    </header>
  `,
  data () {
    return {
      name: ''
    }
  },
  methods: {
    add () {
      if (this.name.trim() === '') return alert('任务名字不能为空了啦')
      // 把name传给父组件
      this.$emit('add', this.name)
      this.name = ''
    }
  }
})