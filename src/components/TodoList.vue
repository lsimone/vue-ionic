<template>
  <ion-page class="ion-page">
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content class="content">

      <ion-list>
        <ion-item v-for="todo in shownTodos" :key="todo.id">
          {{todo.name}}
        </ion-item>
      </ion-list>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-page>
</template>

<script>

  const TODOS = [
    {
      'id': 1,
      'name': 'Make awesome applications'
    },
    {
      'id': 2,
      'name': 'Play squash'
    },
    {
      'id': 3,
      'name': 'Deadlift'
    },
    {
      'id': 4,
      'name': 'Squat'
    }
  ]

  export default {
    name: 'TodoList',
    data () {
      return {
        todos: []
      }
    },
    computed: {
      shownTodos () {
        return this.$route.query.filtered ? this.filtered : this.todos
      },
      filtered () {
        return this.todos.length? [this.todos[0], this.todos[1]] : []
      }
    },
    methods: {
      addTodo () {
        this.$router.push({path: '/todos/add'})
      }
    },
    created () {
      console.log(this.$route.query.filtered)
      setTimeout(() => {
        console.log('loaded todos!')
        this.todos = TODOS
      }, 1000)
    }
  }
</script>

<style lang="scss">
  .todo-fab {
    position: fixed;
    bottom: 25px;
    right: 15px;
    font-size: 30px;
  }

  .content {
    padding: 10px 10px 10px 0px
  }
</style>
