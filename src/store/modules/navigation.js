import api from '@/api'

export const namespaced = true

export const state = {
  navigation: [],
}

export const mutations = {
  setNavigation(state, navigation) {
    state.navigation = navigation
  },
}

export const actions = {
  fetchEdiyaNavigation({ commit }) {
    api.getEdiyaNavigation().then(({ navigation }) => {
      commit('setNavigation', navigation)
    })
  },
}
