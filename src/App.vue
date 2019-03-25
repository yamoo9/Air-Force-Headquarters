<template>
  <div id="app">
    <app-header :brand="brand" :navigation="navigation"></app-header>
    <main class="app-main">
      <app-menu-list :menu="ediyaMenu"></app-menu-list>
    </main>
  </div>
</template>

<script>
import { data as ediyaMenu } from './api/ediya-menu.json'
import { data as ediyaNav } from './api/ediya-navigation.json'
const { brand, navigation } = ediyaNav

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
      brand: { ...brand, type: 'image' },
      navigation,
      ediyaMenu,
    }
  },
  created() {
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
}
</script>
