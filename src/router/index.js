import Vue from 'vue'
import Router from 'vue-router'

import productList from '@/views/productList.vue'
import productItem from '@/views/productItem.vue'

Vue.use(Router)

const routes = [
  // 스태틱 라우트
  { name: 'ProductList', path: '/', component: productList },
  // 다이내믹 라우트
  {
    name: 'ProductItem',
    path: '/product/:name',
    component: productItem,
    // 속성 전달 허용
    props: true,
  },
]

export default new Router({
  mode: 'history',
  routes,
})
