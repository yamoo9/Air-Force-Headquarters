import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brand: null,
    navigation: [],
    ediyaMenu: [],
  },
  mutations: {
    setEdiyaMenu(state, data) {
      state.ediyaMenu = data
    },
    changeFigureImagePath(state) {
      for (let { figure } of state.ediyaMenu) {
        for (let key in figure) {
          if (figure.hasOwnProperty(key) && key === 'name') {
            Vue.set(
              figure,
              'path',
              require(`@/assets/images/${figure[key]}.png`)
            )
            break
          }
        }
      }
    },
    setBrand(state, brand) {
      Vue.set(state, 'brand', { ...brand, type: 'image' })
    },
    setNavigation(state, navigation) {
      state.navigation = navigation
    },
  },
  actions: {
    fetchEdiyaMenu({ commit }) {
      api.getEdiyaMenu().then((data) => {
        commit('setEdiyaMenu', data)
        commit('changeFigureImagePath')
      })
    },
    fetchEdiyaNavigation({ commit }) {
      api.getEdiyaNavigation().then(({ brand, navigation }) => {
        commit('setBrand', brand)
        commit('setNavigation', navigation)
      })
    },
  },
  getters: {},
})
