<template>
  <!-- <button class="button is-open" v-on:click="onShowNavigation">
    <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
  </button> -->
  <app-button
    class="is-open"
    v-bind:isShowNavigationValue="true"
    v-on:click="onClick"
  >
    <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
  </app-button>
</template>

<script>
export default {
  name: 'appNavigationOpenButton',
  methods: {
    onClick(value) {
      this.$emit('click', value)
    },
  },
}
</script>
