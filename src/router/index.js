import Vue from 'vue'
import Router from 'vue-router'
import CommingSoon from '@/components/CommingSoon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommingSoon',
      component: CommingSoon
    }
  ]
})
