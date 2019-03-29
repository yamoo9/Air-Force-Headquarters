import api from '@/api'

export default {
  state: {
    brand: null,
  },
  mutations: {
    setBrand(state, brand) {
      state.brand = brand
    },
  },
  actions: {
    fetchEdiyaNavigation({ commit }) {
      api.getEdiyaNavigation().then(({ brand }) => {
        commit('setBrand', { ...brand, type: 'image' })
      })
    },
  },
}
