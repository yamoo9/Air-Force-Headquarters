import Vue from 'vue'
import Router from 'vue-router'

import menuList from '@/views/menuList.vue'

Vue.use(Router)

const routes = [{ name: 'Home', path: '/', component: menuList }]

export default new Router({
  routes,
})
