<template>
  <div id="app">
    <header class="app-header">
      <h1 class="brand">
        <a v-if="checkBrandType" :href="brand.href" target="_blank">
          <span class="a11y-hidden">{{ brand.title }}</span>
        </a>
        <a v-else :href="brand.href" class="brand-text">{{ brand.title }}</a>
      </h1>
      <app-navigation-open-button @click="onChangeStateNavigation" />
      <nav class="app-navigation" :class="navigationClassViewState">
        <ul class="reset-list">
          <li v-for="item in navigation" :key="item.id">
            <a :href="item.href" target="_blank">{{ item.text }}</a>
          </li>
        </ul>
        <app-navigation-close-button @click="onChangeStateNavigation" />
      </nav>
    </header>
    <main class="app-main">
      <app-menu-list :menu="ediyaMenu"></app-menu-list>
    </main>
  </div>
</template>

<script>
import { data as ediyaNav } from './api/ediya-navigation.json'
const { brand, navigation } = ediyaNav

import { data as ediyaMenu } from './api/ediya-menu.json'

import appNavigationOpenButton from '@/components/appNavigationOpenButton.vue'
import appNavigationCloseButton from '@/components/appNavigationCloseButton.vue'
import appMenuList from './components/appMenuList.vue'

export default {
  name: 'app',
  components: {
    appNavigationOpenButton,
    appNavigationCloseButton,
    appMenuList,
  },
  data() {
    return {
      brand: { ...brand, type: 'image' },
      navigation,
      isShowNavigation: false,
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
  computed: {
    checkBrandType() {
      return this.brand.type.includes('image')
    },
    navigationClassViewState() {
      return this.isShowNavigation ? 'is-active' : null
    },
  },
  methods: {
    onChangeStateNavigation(value) {
      this.isShowNavigation = value
    },
    onShowNavigation() {
      this.isShowNavigation = true
    },
    onHideNavigation() {
      this.isShowNavigation = false
    },
  },
}
</script>

<style lang="sass">
.brand
  .brand-text
    background-image: none
    width: auto
    font-size: 20px
    font-weight: 900
    color: #5372C4
</style>
