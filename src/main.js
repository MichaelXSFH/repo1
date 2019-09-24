import Vue from 'vue'
import App from './App.vue'
import router1 from './router'

import axios from 'axios'
import {store} from './store/store.js'

axios.defaults.baseURL = 'http://localhost:9001/'


//全局守卫
// router.beforeEach((to,from,next) =>{
//   if(to.path=='/login' ||to.path=='/register'){
//     next();
//   }else{
//     alert('请先登录');
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to,from) =>{
//   alert("after each");
// })

new Vue({
  el: '#app',
  router:router1,
  store,
  render: h => h(App)
})
