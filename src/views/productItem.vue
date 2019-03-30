<template>
  <div class="product-item" v-if="item">
    <div class="ediya-menu__item--detail">
      <figure class="ediya-menu__item--image">
        <img
          :src="figure.path"
          :width="figure.width"
          :height="figure.height"
          :alt="changeDashToSpace"
        />
      </figure>
      <strong class="ediya-menu__item--name">
        {{ detail.ko }}
        <span lang="en">{{ detail.en }}</span>
      </strong>
      <p class="ediya-menu__item--desc">{{ detail.desc }}</p>
      <div class="ediya-menu__item--multi-column is-2">
        <p>
          <span v-for="(content, i) in detail.display_criteria" :key="i">
            {{ content[0] }}
            <b>({{ content[1] }})</b>
          </span>
        </p>
      </div>
      <!-- 뒤로 가기 버튼 -->
      <app-button
        @click.native="$router.go(-1)"
        class="is-back"
        aria-label="뒤로 가기"
        title="뒤로 가기"
      >
        ←
      </app-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('ediyaMenu')

export default {
  name: 'ProductItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  created() {
    // 다이내믹 라우트로 사용자가 직접 이동한 경우,
    // Vuex 스토어 > ediyaMenu 모듈에 비동기 통신 요청
    // Nprogress 바 사용 시, 비동기 통신 요청 설정
    // if (!this.item) {
    // this.fetchEdiyaMenu()
    this.fetchEdiyaMenuItem(this.name)
    // }
  },
  computed: {
    ...mapGetters(['getEdiyaMenuItemByName']),
    item() {
      return this.getEdiyaMenuItemByName(this.name)
    },
    figure() {
      return this.item.figure
    },
    detail() {
      return this.item.detail
    },
    changeDashToSpace() {
      return this.figure.name.replace(/-/g, ' ')
    },
  },
  methods: {
    // ...mapActions(['fetchEdiyaMenu']),
    ...mapActions(['fetchEdiyaMenuItem']),
  },
}
</script>

<style scoped>
.ediya-menu__item--detail {
  width: 80%;
  max-width: 40rem;
  min-height: 31rem;
  opacity: 1;
  top: 50%;
  left: 50%;
  border-color: #f3f3f3;
  transform: translate(-50%, -50%);
}

.ediya-menu__item--image {
  position: absolute;
  z-index: 100;
  width: 90%;
  bottom: 90px;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
}

.is-back {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  padding: 0.5em;
  line-height: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #6b6b6b;
  transition: all 0.2s ease-out;
}

.is-back:hover {
  color: #162442;
  border-radius: 50%;
  transform: translateX(-5px);
}

@media (min-width: 40em) {
  .ediya-menu__item--image img {
    position: absolute;
    right: -70px;
    bottom: 0;
  }
}
</style>
