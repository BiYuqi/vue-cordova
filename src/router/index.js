import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello_world',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/back',
      name: 'back_page',
      component: () => import('@/components/backPage')
    }
  ]
})
