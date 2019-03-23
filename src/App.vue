<template>
  <div id="app">
    <header class="app-header">
      <h1 class="brand">
        <a v-bind:href="brand.href" target="_blank">
          <span class="a11y-hidden">{{ brand.title }}</span>
        </a>
      </h1>
      <button type="button" class="button is-open">
        <img src="./assets/images/navigation-button.gif" alt="메뉴 열기" />
      </button>
      <nav hidden class="app-navigation">
        <ul class="reset-list">
          <li>
            <a v-bind:href="navigation[0].href" target="_blank">
              {{ navigation[0].text }}
            </a>
          </li>
          <li>
            <a v-bind:href="navigation[1].href" target="_blank">
              {{ navigation[1].text }}
            </a>
          </li>
          <li>
            <a v-bind:href="navigation[2].href" target="_blank">
              {{ navigation[2].text }}
            </a>
          </li>
          <li>
            <a v-bind:href="navigation[3].href" target="_blank">
              {{ navigation[3].text }}
            </a>
          </li>
          <li>
            <a v-bind:href="navigation[4].href" target="_blank">
              {{ navigation[4].text }}
            </a>
          </li>
          <li>
            <a v-bind:href="navigation[5].href" target="_blank">
              {{ navigation[5].text }}
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
      brand,
      navigation,
    }
  },
}
</script>

<style lang="scss"></style>
