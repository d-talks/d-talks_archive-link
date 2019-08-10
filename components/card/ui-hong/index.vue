<template>
  <div class="root">
    <div class="module-card uihong">
      <div class="card-visual">
        <!-- url에 따른 meta img 출력 -->
        <img src="https://dummyimage.com/224x360px" alt="card visual image" />
        <div class="gradient"></div>
      </div>
      <div class="card-contents">
        <div class="favicon">
          <!-- url에 따른 favicon 출력 -->
        </div>
        <p class="text-title">
          <!-- 최대 2줄 / 약 40자 / ... 처리 -->
          Design Inspiration 01 for design inspira ...
        </p>
        <p class="text-sub">
          <!-- 최대 2줄 / 약 70자 / ... 처리 -->
          Sed ornare turpis nec tristique iaculis. Curabitur convallis mollis
          purus a …
        </p>
      </div>
      <div class="card-footer">
        <div class="tags">
          <!-- 1col: 최대 3개 /2col, 3col: 최대 6개-->
          <span class="tag">&#35;Fine Art</span>
          <span class="tag">&#35;Exhibition</span>
          <span class="tag">&#35;UI/UX</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" src="./style.scss" scoped>
.root {
  width: 100%;
}
</style>
