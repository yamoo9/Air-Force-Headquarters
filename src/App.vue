<template>
  <div id="app">
    <app-header :brand="brand" :navigation="navigation"></app-header>
    <main class="app-main">
      <app-menu-list :menu="ediyaMenu"></app-menu-list>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

import appHeader from './components/appHeader.vue'
import appMenuList from './components/appMenuList.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appMenuList,
  },
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
    fetchData() {
      // API
      // ------------------------------------------------------------
      // ediya-menu.json       : https://api.myjson.com/bins/htzry
      // ediya-navigation.json : https://api.myjson.com/bins/11jnm6
      // ------------------------------------------------------------

      // ediya-menu 비동기 통신
      axios
        .get('https://api.myjson.com/bins/htzry')
        .then(({ data }) => data.data)
        .then((data) => {
          this.ediyaMenu = data
          this.changeFigureImagePath()
        })

      // ediya-navigation 비동기 통신
      axios
        .get('https://api.myjson.com/bins/11jnm6')
        .then(({ data }) => data.data)
        .then(({ brand, navigation }) => {
          this.brand = Object.assign(this.brand, brand)
          this.navigation = navigation
        })
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
