<template>
  <div class="product-item">
    {{ productName }}
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  computed: {
    productName() {
      return this.$route.params.name
    },
  },
}
</script>

<style scoped></style>
