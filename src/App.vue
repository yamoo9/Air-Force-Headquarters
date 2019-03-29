<template>
  <div id="app">
    <app-header v-if="brand" :brand="brand" :navigation="navigation" />
    <main class="app-main">
      <app-menu-list v-if="ediyaMenu" :menu="ediyaMenu" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('fetchEdiyaNavigation')
    this.$store.dispatch('fetchEdiyaMenu')
  },
  computed: {
    brand() {
      return this.$store.state.brand
    },
    navigation() {
      return this.$store.state.navigation
    },
    ediyaMenu() {
      return this.$store.state.ediyaMenu
    },
  },
}
</script>
