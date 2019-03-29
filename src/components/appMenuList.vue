<template>
  <ul class="ediya-menu reset-list">
    <li
      is="app-menu-list-item"
      v-for="item in menu"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
export default {
  name: 'appMenuList',
  props: ['menu'],
}
</script>
