<template>
  <div id="app">
    <header class="app-header">
      <h1 class="brand">
        <a
          v-if="brand.type.includes('image')"
          v-bind:href="brand.href"
          target="_blank"
        >
          <span class="a11y-hidden">{{ brand.title }}</span>
        </a>
        <a v-else b-bind:href="brand.href" class="brand-text">
          {{ brand.title }}
        </a>
      </h1>
      <button type="button" class="button is-open">
        <img src="./assets/images/navigation-button.gif" alt="메뉴 열기" />
      </button>
      <nav hidden class="app-navigation">
        <!-- <nav class="app-navigation is-active"> -->
        <ul class="reset-list">
          <li v-for="item in navigation" v-bind:key="item.id">
            <a v-bind:href="item.href" target="_blank">
              {{ item.text }}
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="button is-close-menu"
          aria-label="메뉴 닫기"
        >
          ×
        </button>
      </nav>
    </header>
  </div>
</template>

<script>
import { data as ediyaNav } from './api/ediya-navigation.json'
const { brand, navigation } = ediyaNav

export default {
  name: 'app',
  data() {
    return {
      brand: { ...brand, type: 'image' },
      navigation,
    }
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
