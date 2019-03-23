<template>
  <div id="app">
    <header class="app-header">
      <h1 class="brand">
        <a href="https://www.ediya.com/" target="_blank">
          <span class="a11y-hidden">EDIYA COFFEE</span>
        </a>
      </h1>
      <button type="button" class="button is-open">
        <img src="./assets/images/navigation-button.gif" alt="메뉴 열기" />
      </button>
      <nav hidden class="app-navigation">
        <ul class="reset-list">
          <li><a href="#">메뉴</a></li>
          <li><a href="#">이디야멤버스</a></li>
          <li><a href="#">이디야커피랩</a></li>
          <li><a href="#">이디야컬쳐랩</a></li>
          <li><a href="#">공지사항</a></li>
          <li><a href="#">매장찾기</a></li>
        </ul>
        <button
          type="button"
          class="button is-close-menu"
          aria-label="메뉴 닫기"
        >
          ×
        </button>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss"></style>
