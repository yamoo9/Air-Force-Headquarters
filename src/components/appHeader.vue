<template>
  <header class="app-header">
    <h1 class="brand">
      <a v-if="checkBrandType" :href="brand.href" target="_blank">
        <span class="a11y-hidden">{{ brand.title }}</span>
      </a>
      <a v-else :href="brand.href" class="brand-text">{{ brand.title }}</a>
    </h1>
    <app-button class="is-open" @click="onShowNavigation">
      <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
    </app-button>
    <nav class="app-navigation" :class="navigationClassViewState">
      <ul class="reset-list">
        <li v-for="item in navigation" :key="item.id">
          <a :href="item.href" target="_blank">{{ item.text }}</a>
        </li>
      </ul>
      <app-button
        class="is-close-menu"
        aria-label="메뉴 닫기"
        @click="onHideNavigation"
      >
        ×
      </app-button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  props: ['brand', 'navigation'],
  data() {
    return {
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
