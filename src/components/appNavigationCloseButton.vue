<template>
  <app-button class="is-close-menu" aria-label="메뉴 닫기">
    ×
  </app-button>
</template>

<script>
import appButton from '@/components/appButton.vue'

export default {
  name: 'appNavigationCloseButton',
  components: { appButton },
  methods: {
    onHideNavigation() {
      console.log('내비게이션 메뉴 닫기 버튼이 클릭 됨.')
    },
  },
}
</script>
