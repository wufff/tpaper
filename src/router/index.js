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
import analysis from '../views/analysis.vue'
import my from '../views/my.vue'
import history_zj  from "../views/history_zj"
import history_xz  from "../views/history_xz"
import history_ct  from "../views/history_ct"

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      login:true
    }
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
    path: '/analysis',
    name: 'analysis',
    component: analysis
  },
  {
    path: '/my',
    name: 'my',
    component: my
  }, 
  {
    path: '/history_zj',
    name: 'history_zj',
    component: history_zj
  },
  {
    path: '/history_xz',
    name: 'history_xz',
    component: history_xz
  },
  {
    path: '/history_ct',
    name: 'history_ct',
    component: history_ct
  },                
  {
    path: '/allpaper',
    name: 'allpaper',
    component: () => import('../views/allpaper.vue')
  }
]

const router = new VueRouter({
     routes
})


router.beforeEach((to,from,next) => {
   let bl = to.matched.some((item) => {
      return item.meta.login;
   })
   if(bl){
      let vm = router.app;
      console.log(vm.$local);
      next();
   }else{
      next();
   }
})


export default router
