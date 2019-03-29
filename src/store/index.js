import Vue from 'vue'
import Vuex from 'vuex'
import brand from './modules/brand'
import * as navigation from './modules/navigation'
import ediyaMenu from './modules/ediyaMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    brand,
    navigation,
    ediyaMenu,
  },
})
