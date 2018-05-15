import Vue from 'vue'
import VueRouter from 'vue-router';

import TodoList from './components/TodoList.vue';
import AddTodoItem from './components/AddTodoItem.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: '/todos'},
  { path: '/todos', component: TodoList },
  { path: '/todos/add', component: AddTodoItem}
]

export default new VueRouter({
  routes,
  mode: 'history'
})
