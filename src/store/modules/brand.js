import api from '@/api'

export default {
  namespaced: true,
  state: {
    brand: null,
  },
  mutations: {
    setBrand(state, brand) {
      state.brand = brand
    },
  },
  actions: {
    fetchBrand({ commit }) {
      api.getEdiyaNavigation().then(({ brand }) => {
        commit('setBrand', { ...brand, type: 'image' })
      })
    },
  },
}
