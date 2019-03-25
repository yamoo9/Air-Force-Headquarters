<template>
  <li class="ediya-menu__item">
    <a href="#" @click.prevent="open">
      <figure>
        <img
          :src="figure.path"
          :width="figure.width"
          :height="figure.height"
          alt
        />
        <figcaption>{{ changeDashToSpace }}</figcaption>
      </figure>
    </a>
    <div
      ref="detail"
      class="ediya-menu__item--detail"
      :class="changeStateClass"
    >
      <strong class="ediya-menu__item--name">
        {{ detail.ko }}
        <span lang="en">{{ detail.en }}</span>
      </strong>
      <p>{{ detail.desc }}</p>
      <div class="ediya-menu__item--multi-column is-2">
        <p>
          <span v-for="(content, i) in detail.display_criteria" :key="i">
            {{ content[0] }}
            <b>({{ content[1] }})</b>
          </span>
        </p>
      </div>
      <app-button
        @click.native="close"
        class="is-close-panel"
        aria-label="아이템 소개 패널 닫기"
      >
        ×
      </app-button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'appMenuListItem',
  props: ['item'],
  data() {
    return {
      figure: this.item.figure,
      detail: this.item.detail,
      toggleVisibleState: false,
    }
  },
  computed: {
    changeDashToSpace() {
      return this.figure.name.replace(/-/g, ' ')
    },
    changeStateClass() {
      const state = this.toggleVisibleState
      const detail = this.$refs.detail
      detail && (detail.style.zIndex = state ? 50 : -1)
      return state ? 'is-active' : null
    },
  },
  methods: {
    open() {
      this.toggleVisibleState = true
    },
    close() {
      this.toggleVisibleState = false
    },
  },
}
</script>

<style lang="sass" scoped>
.ediya-menu__item--detail
  z-index: -1
</style>
