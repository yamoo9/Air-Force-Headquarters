<template>
  <app-button
    class="is-close-menu"
    aria-label="메뉴 닫기"
    v-bind:isShowNavigationValue="false"
    v-on:click="onClick"
  >
    ×
  </app-button>
</template>

<script>
export default {
  name: 'appNavigationCloseButton',
  methods: {
    onClick(value) {
      this.$emit('click', value)
    },
  },
}
</script>
