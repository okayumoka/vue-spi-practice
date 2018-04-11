import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SuperNodeList from '@/components/SuperNodeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/super-node-list',
      name: 'SuperNodeList',
      component: SuperNodeList
    }
  ]
})
