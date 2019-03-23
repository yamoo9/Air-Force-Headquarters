<template>
  <button type="button" class="button" v-on:click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'appButton',
  props: ['onClickHandler', 'appLog'],
  methods: {
    onClick() {
      this.onClickHandler()
    },
  },
}
</script>
