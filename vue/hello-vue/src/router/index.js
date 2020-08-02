import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'

import UserList from '../views/user/List'
import UserProfile from '../views/user/proFile'
import NotFound from '../views/NotFound'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main/:name',
      component: Main,
      props: true,
      children: [
        {
          path: '/user/profile/:id/:name',
          name: 'UserProfile',
          component: UserProfile,
          props: true
        },
        {
          path: '/user/list',
          component: UserList
        }
      ]
    },
    {
      path: '/goHome',
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
