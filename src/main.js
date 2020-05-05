import Vue from 'vue' 
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'
import App from './layouts/App.vue'
import router from './router/index'; 
 
Vue.use(VueRouter)  
Vue.config.productionTip = false 
Vue.prototype.router = router;
Vue.prototype.goBack = () => {
    router.go(-1);
};

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
