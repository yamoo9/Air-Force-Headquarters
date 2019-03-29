<template>
  <header class="app-header">
    <h1 class="brand">
      <router-link v-if="checkBrandType" :to="{ name: 'ProductList' }">
        <span class="a11y-hidden">{{ brand.title }}</span>
      </router-link>
      <a v-else :href="brand.href" class="brand-text">{{ brand.title }}</a>
    </h1>
    <app-button class="is-open" @click.native="onShowNavigation">
      <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
    </app-button>
    <nav class="app-navigation" :class="navigationClassViewState">
      <ul class="reset-list">
        <li v-for="(item, i) in navigation" :key="item.id">
          <a
            :ref="`navLink${i}`"
            :tabindex="changeFocusState"
            :href="item.href"
            target="_blank"
            @keydown.shift.tab="onCheckBlurMoveToCloseButton(i)"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
      <app-button
        ref="closeBtn"
        class="is-close-menu"
        aria-label="메뉴 닫기"
        :tabindex="changeFocusState"
        @click.native="onHideNavigation"
        @keydown.tab.native="onCheckBlurMoveToFirstNavLinkItem"
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
    changeFocusState() {
      return this.isShowNavigation ? 0 : -1
    },
  },
  watch: {
    isShowNavigation(value) {
      if (value) {
        document.addEventListener('keyup', this.toggleEscAction.bind(this))
      } else {
        document.removeEventListener('keyup', this.toggleEscAction)
      }
    },
  },
  methods: {
    toggleEscAction(e) {
      if (e.key === 'Escape') {
        this.onHideNavigation()
      }
    },
    onShowNavigation() {
      this.isShowNavigation = true
    },
    onHideNavigation() {
      this.isShowNavigation = false
    },
    onCheckBlurMoveToFirstNavLinkItem(e) {
      if (!e.shiftKey) {
        window.setTimeout(() => {
          this.$refs.navLink0[0].focus()
        }, 0)
      }
    },
    onCheckBlurMoveToCloseButton(i) {
      if (i === 0) {
        window.setTimeout(() => {
          this.$refs.closeBtn.$el.focus()
        }, 0)
      }
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
