import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register.vue"
import Lesson1 from "../views/Lesson1.vue";
import Multiply from "../views/Multiply.vue";
import BankAccount from "../views/BankAccount.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/lesson1',
    name: 'Lesson 1',
    component: Lesson1
  },
  {
    path: '/multiply',
    name: 'Multiply',
    component: Multiply
  },
  {
    path: '/bankaccount',
    name: 'Bank Account',
    component: BankAccount
  }
]

const router = new VueRouter({
  routes
})

export default router
