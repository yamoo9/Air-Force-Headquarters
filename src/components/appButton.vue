<template>
  <button type="button" class="button" v-on:click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'appButton',
  props: ['isShowNavigationValue'],
  methods: {
    onClick() {
      this.$emit('click', this.isShowNavigationValue)
    },
  },
}
</script>
