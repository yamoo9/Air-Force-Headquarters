<template>
  <app-button
    class="is-close-menu"
    aria-label="메뉴 닫기"
    v-bind:on-click-handler="onHideNavigation"
    v-bind:app-log="appLog"
  >
    ×
  </app-button>
</template>

<script>
export default {
  name: 'appNavigationCloseButton',
  props: ['onClickHandler', 'appLog'],
  methods: {
    onHideNavigation() {
      console.log(this.appLog)
    },
  },
}
</script>
