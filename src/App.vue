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
    this.fetchBrand()
    this.fetchEdiyaNavigation()
    this.fetchEdiyaMenu()
  },
  computed: {
    ...mapState('brand', ['brand']),
    ...mapState('navigation', ['navigation']),
    ...mapState('ediyaMenu', ['ediyaMenu']),
  },
  methods: {
    ...mapActions({
      fetchBrand: 'brand/fetchBrand',
      fetchEdiyaNavigation: 'navigation/fetchEdiyaNavigation',
      fetchEdiyaMenu: 'ediyaMenu/fetchEdiyaMenu',
    }),
  },
}
</script>
