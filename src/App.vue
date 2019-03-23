<template>
  <div id="app">
    <header class="app-header">
      <h1 class="brand">
        <a v-if="checkBrandType" v-bind:href="brand.href" target="_blank">
          <span class="a11y-hidden">{{ brand.title }}</span>
        </a>
        <a v-else v-bind:href="brand.href" class="brand-text">
          {{ brand.title }}
        </a>
      </h1>
      <app-navigation-open-button
        v-on:click="onShowNavigation"
        app-log="내비게이션 메뉴 열기 버튼이 클릭 됨."
      />
      <nav class="app-navigation" v-bind:class="navigationClassViewState">
        <ul class="reset-list">
          <li v-for="item in navigation" v-bind:key="item.id">
            <a v-bind:href="item.href" target="_blank">
              {{ item.text }}
            </a>
          </li>
        </ul>
        <app-navigation-close-button
          app-log="내비게이션 메뉴 닫기 버튼이 클릭 됨."
        />
      </nav>
    </header>
  </div>
</template>

<script>
import { data as ediyaNav } from './api/ediya-navigation.json'
const { brand, navigation } = ediyaNav

import appNavigationOpenButton from '@/components/appNavigationOpenButton.vue'
import appNavigationCloseButton from '@/components/appNavigationCloseButton.vue'

export default {
  name: 'app',
  components: {
    appNavigationOpenButton,
    appNavigationCloseButton,
  },
  data() {
    return {
      brand: { ...brand, type: 'image' },
      navigation,
      isShowNavigation: false,
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
