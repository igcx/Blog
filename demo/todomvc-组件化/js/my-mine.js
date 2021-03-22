Vue.component('my-mine', {
  template: `
  <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model="checkAll">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li :class="{completed: item.done, editing: item.id === clickId}" v-for="item in list" :key="item.id">
						<div class="view">
							<input class="toggle" type="checkbox" :checked="item.done" @change="change(item.id)">
							<label @dblclick="show(item.id, item.name)">{{item.name}}</label>
							<button class="destroy" @click="del(item.id)"></button>
						</div>
						<input class="edit" v-model="clickName" @keyup.enter="update(item.id)" @keyup.esc="cancel" @blur="update(item.id)">
					</li>
				</ul>
			</section>
  `,
  data() {
    return {
      // props 接收的数据名 不可以和 data中定义的 属性 重名。
      // list: '11'
      clickId: '',
      clickName: ''
    }
  },
  props: ["list"],
  methods: {
    del(id) {
      // console.log(id)
      this.$emit('del', id)
    },
    change(id){
      // console.log(id, done)
      this.$emit('change', id)
    },
    show(id, name) {
      this.clickId = id
      this.clickName = name
    },
    update(id) {
      this.$emit('update', id, this.clickName)
      this.clickId = ''
    },
    cancel() {
      this.clickId = ''
    }
  },
  computed: {
    checkAll: {
      get() {
        return this.list.every(item => item.done)
      },
      set(value) {
        this.$emit('check-all', value)
      }
    }
  }
})