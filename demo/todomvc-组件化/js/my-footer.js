Vue.component('my-footer', {
  template: `
    <footer class="footer" v-show="list.length > 0">
				<span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
				<ul class="filters">
					<li>
						<a class="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" v-show="isshow" @click="clear">Clear completed</button>
			</footer>
  `,
  props: ['list'],
  methods: {
    clear() {
      // 因为html标签中，属性名不区分大小写，所以我们触发的自定义事件名 中不可以存在大写
      // clear-todo
      this.$emit('clear-todo')
    }
  },
  computed: {
    leftCount() {
      return this.list.filter(item => !item.done).length
    },
    isshow() {
      return this.list.some(item => item.done)
    }
  }
})