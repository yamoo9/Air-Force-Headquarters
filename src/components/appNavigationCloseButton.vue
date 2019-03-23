<template>
  <button
    type="button"
    class="button is-close-menu"
    aria-label="메뉴 닫기"
    v-on:click="onHideNavigation"
  >
    ×
  </button>
</template>

<script>
export default {
  name: 'appNavigationCloseButton',
  methods: {
    onHideNavigation() {
      console.log('내비게이션 메뉴 닫기 버튼이 클릭 됨.')
    },
  },
}
</script>
