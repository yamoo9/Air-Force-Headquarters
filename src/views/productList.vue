<template>
  <div class="home">
    <app-menu-list v-if="ediyaMenu" :menu="ediyaMenu" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MenuList',
  created() {
    this.fetchEdiyaMenu()
  },
  computed: {
    ...mapState('ediyaMenu', ['ediyaMenu']),
  },
  methods: {
    ...mapActions({
      fetchEdiyaMenu: 'ediyaMenu/fetchEdiyaMenu',
    }),
  },
}
</script>

<style scoped></style>
