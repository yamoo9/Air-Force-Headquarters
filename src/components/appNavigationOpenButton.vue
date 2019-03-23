<template>
  <!-- <button class="button is-open" v-on:click="onShowNavigation">
    <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
  </button> -->
  <app-button
    class="is-open"
    v-bind:on-click-handler="onShowNavigation"
    v-bind:app-log="appLog"
  >
    <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
  </app-button>
</template>

<script>
export default {
  name: 'appNavigationOpenButton',
  props: ['appLog'],
  methods: {
    onShowNavigation() {
      console.log(this.appLog)
    },
  },
}
</script>
