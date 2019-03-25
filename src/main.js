// CSS 파일 로드
import '@/assets/app.css'

import Vue from 'vue'
import App from './App.vue'

// 글로벌 컴포넌트 파일 로드
import './plugins/globalComponents.js'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
