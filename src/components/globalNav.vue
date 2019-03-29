<template>
  <app-header v-if="brand" :brand="brand" :navigation="navigation" />
</template>

<script>
import appHeader from './appHeader.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GlobalNav',
  components: { appHeader },
  created() {
    this.fetchBrand()
    this.fetchEdiyaNavigation()
  },
  computed: {
    ...mapState('brand', ['brand']),
    ...mapState('navigation', ['navigation']),
  },
  methods: {
    ...mapActions({
      fetchBrand: 'brand/fetchBrand',
      fetchEdiyaNavigation: 'navigation/fetchEdiyaNavigation',
    }),
  },
}
</script>
