import Vue from 'vue'
import Router from 'vue-router'

import productList from '@/views/productList.vue'
import productItem from '@/views/productItem.vue'

Vue.use(Router)

const routes = [
  // 스태틱 라우트
  { name: 'ProductList', path: '/', component: productList },
  // 다이내믹 라우트
  { name: 'ProductItem', path: '/product/:name', component: productItem },
]

export default new Router({
  routes,
})
