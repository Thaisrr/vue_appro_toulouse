import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "@/components/Home";
import HelloWorld from "@/components/HelloWorld";
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";

// On définit une route pour chaque composant :
// ( Attention à bien importer les composants )
const routes = [
  {path: '/home', name: 'home', component: Home},
  {path: '/hello', name: 'helloworld', component: HelloWorld},
  {path: '/todos', name: 'todos', component: Todos},
  {path: '/add-todo', name: 'add', component: AddTodo}
];

// On créé l'instance de Vue Router
const router = new VueRouter({
  routes
})


Vue.use(VueRouter); // On dit à Vue qu'on utilise Vue Router

Vue.config.productionTip = false


new Vue({
  router, // on ajoute vue dans l'instance de Vue
  render: h => h(App),
}).$mount('#app')
