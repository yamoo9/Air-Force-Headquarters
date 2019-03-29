<template>
  <div id="app">
    <global-nav />
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import globalNav from '@/components/globalNav.vue'

export default {
  name: 'app',
  components: {
    globalNav,
  },
}
</script>
