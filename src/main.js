// CSS 파일 로드
import '@/assets/app.css'
// Nprogress CSS
import 'nprogress/nprogress.css'

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

// 글로벌 컴포넌트 파일 로드
import './plugins/globalComponents.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
