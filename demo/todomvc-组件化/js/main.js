Vue.component('todos-main', {
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
          <input class="edit" v-model="clickName" @keyup.enter="update" @keyup.esc="cancel" @blur="update" v-focus="item.id === clickId">
        </li>
      </ul>
    </section>
  `,
  props: ['list'],
  data () {
    return {
      clickId: '',
      clickName: ''
    }
  },
  methods: {
    del(id) {
      // console.log(id)
      this.$emit('del', id)
      // this.list = this.list.filter(item => item.id !== id)
      // const idx = this.list.findIndex(item => item.id === id)
      // this.list.splice(idx, 1)
    },
    change(id) {
      // console.log(id)
      this.$emit('change', id)
    },
    show (id, name) {
      this.clickId = id
      this.clickName = name
    },
    update() {
      // console.log('123')
      if (this.clickId === '') return
      // console.log(id, this.clickName)
      this.$emit('update', this.clickId, this.clickName)
      this.clickId = ''
    },
    cancel() {
      this.clickId = ''
    }
  },
  computed: {
    checkAll: {
      get() {
        // 只要list中都选中，就选中
        return this.list.every(item => item.done)
      },
      set(value) {
        // console.log(value)
        this.$emit('check-all', value)
      }
    }
  },
  directives: {
    focus (el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
})