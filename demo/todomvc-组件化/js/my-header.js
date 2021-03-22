Vue.component('my-header', {
  template: `
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="add" v-model="name">
  </header>
  `,
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      this.$emit('add', this.name)
      this.name = ''
    }
  }
})