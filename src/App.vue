<template>
  <div id="app">
    <app-header v-if="brand" :brand="brand" :navigation="navigation" />
    <main class="app-main">
      <app-menu-list v-if="ediyaMenu" :menu="ediyaMenu" />
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  created() {
    this.fetchEdiyaNavigation()
    this.fetchEdiyaMenu()
  },
  computed: {
    ...mapState(['brand', 'navigation', 'ediyaMenu']),
  },
  methods: {
    ...mapActions(['fetchEdiyaNavigation', 'fetchEdiyaMenu']),
  },
}
</script>
