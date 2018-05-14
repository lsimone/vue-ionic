<template>
  <ion-page class="ion-page">
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content class="content">

      <div>TEST</div>


      <ion-list>
        <ion-item v-for="todo in todos" :key="todo.id">
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
    data () {
      return {
        todos: []
      }
    },
    methods: {
      addTodo () {
        this.$router.push({path: '/todos/add'})
      }
    },
    created () {
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
