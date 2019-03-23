<template>
  <app-button class="is-open" v-on:click="onShowNavigation">
    <img src="../assets/images/navigation-button.gif" alt="메뉴 열기" />
  </app-button>
</template>

<script>
import appButton from '@/components/appButton.vue'

export default {
  name: 'appNavigationOpenButton',
  components: { appButton },
  methods: {
    onShowNavigation() {
      console.log('내비게이션 메뉴 열기 버튼이 클릭 됨.')
    },
  },
}
</script>
