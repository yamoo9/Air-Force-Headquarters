import Vue from 'vue'
import api from '@/api'

export default {
  namespaced: true,
  state: {
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
  },
  actions: {
    fetchEdiyaMenu({ commit }) {
      api.getEdiyaMenu().then((data) => {
        commit('setEdiyaMenu', data)
        commit('changeFigureImagePath')
      })
    },
  },
}
