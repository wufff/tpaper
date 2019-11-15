import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './register'
import FastClick from 'fastclick'
import 'amfe-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'



FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
