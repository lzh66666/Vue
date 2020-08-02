import Vue from 'vue'
import App from './App'

import router from './router' //自动扫描里面的路由配置（index才可以）

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  // 配置路由
  router,
  components: { App },
  template: '<App/>'
})
