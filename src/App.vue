<template>
  <div id="app">
    <app-header :brand="brand" :navigation="navigation" />
    <main class="app-main">
      <app-menu-list :menu="ediyaMenu" />
    </main>
  </div>
</template>

<script>
import api from './api'

export default {
  name: 'app',
  data() {
    return {
      brand: { type: 'image' },
      navigation: [],
      ediyaMenu: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { getEdiyaMenu, getEdiyaNavigation } = api

      this.ediyaMenu = await getEdiyaMenu()
      this.changeFigureImagePath()

      const { brand, navigation } = await getEdiyaNavigation()

      this.brand = Object.assign(this.brand, brand)
      this.navigation = navigation
    },
    changeFigureImagePath() {
      for (let { figure } of this.ediyaMenu) {
        for (let key in figure) {
          if (figure.hasOwnProperty(key) && key === 'name') {
            this.$set(
              figure,
              'path',
              require(`./assets/images/${figure[key]}.png`)
            )
            break
          }
        }
      }
    },
  },
}
</script>
