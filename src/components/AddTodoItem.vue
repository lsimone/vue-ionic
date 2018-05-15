<template>
  <ion-page class="ion-page">
    <ion-header class="toolbar-md-primary">

      <ion-toolbar>
        <ion-title>Add Item</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-item>
        <ion-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></ion-input>
      </ion-item>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-page>
</template>

<script>

  export default {
    name: 'AddTodoItem',
    data() {
      return {
        name: ''
      }
    },
    methods: {
      addTodo() {
        const newTodo = { name: this.name }
        setTimeout(() => {
          console.warn('insertion to be done')
          this.$router.push({path: '/todos'})
        }, 1000)
      },
      updateTodoName(e) {
        console.log(`inserted ${e.currentTarget.value}`)
        this.name = this.$refs.newTodoItem.value
      }
    }
  }

</script>

<style lang="scss">

</style>
