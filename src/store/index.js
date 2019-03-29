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
    setBrand(state, brand) {
      state.brand = brand
    },
    setNavigation(state, navigation) {
      state.navigation = navigation
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
        commit('setBrand', { ...brand, type: 'image' })
        commit('setNavigation', navigation)
      })
    },
  },
  getters: {},
})
