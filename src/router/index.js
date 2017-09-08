import Vue from 'vue'
import Router from 'vue-router'
import singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'singer',
      component: singer
    },
    {
      path: '/singer',
      // name: 'singer',
      component: singer
    }
  ]
})
