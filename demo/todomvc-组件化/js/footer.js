Vue.component('todos-footer', {
  template: `
    <footer class="footer" v-show="list.length > 0">
      <span class="todo-count"><slot name="left" :count="leftCount"></slot></span>
      <ul class="filters">
        <li>
          <router-link to="/" exact>All</router-link>
        </li>
        <li>
          <router-link to="/active">Active</router-link>
        </li>
        <li>
          <router-link to="/completed">Completed</router-link>
        </li>
      </ul>
      <button class="clear-completed" v-show="isShow" @click="clear"><slot></slot></button>
    </footer>
  `,
  props: ['list'],
  computed: {
    leftCount () {
      // 未完成的任务的个数
      return this.list.filter(item => !item.done).length
    },
    isShow() {
      // 只要有完成的任务，就显示
      return this.list.some(item => item.done)
    },
  },
  methods: {
    clear() {
      //
      // console.log('123')
      this.$emit('clear-todo') 
    }
  }
})