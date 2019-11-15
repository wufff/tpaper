import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'
import tree from '../views/tree.vue'
import cart from '../views/cart.vue'
import allpaper from '../views/allpaper.vue'
import paperDtail from '../views/paperDtail.vue'
import myTest from '../views/myTest.vue'
import result from '../views/result.vue'


Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/items',
    name: 'items',
    component: Items
  },   
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },  
  {
    path: '/paperDtail',
    name: 'paperDtail',
    component: paperDtail
  },  
  {
    path: '/myTest',
    name: 'myTest',
    component: myTest
  }, 
  {
    path: '/result',
    name: 'result',
    component: result
  },       
  {
    path: '/allpaper',
    name: 'allpaper',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/allpaper.vue')
  }
]

const router = new VueRouter({
     routes
})

export default router
