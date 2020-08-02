import Vue from 'vue'
import VueRouter from 'vue-router'

import Content from '../components/Content'
import Main from '../components/Main'


//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      // 路由的路径
      path: '/content',
      name: 'content',
      // 路由的跳转
      component: Content

    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
