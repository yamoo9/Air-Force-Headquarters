<template>
  <li class="ediya-menu__item">
    <router-link :to="{ name: 'ProductItem', params: { name: figure.name } }">
      <figure>
        <img
          :src="figure.path"
          :width="figure.width"
          :height="figure.height"
          alt
        />
        <figcaption>{{ changeDashToSpace }}</figcaption>
      </figure>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'appMenuListItem',
  props: ['item'],
  computed: {
    figure() {
      return this.item.figure
    },
    changeDashToSpace() {
      return this.figure.name.replace(/-/g, ' ')
    },
  },
}
</script>
