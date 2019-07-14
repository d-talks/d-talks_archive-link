<template>
  <div class="root">
    <div class="module-card radius-6 uihong">
      <div
        class="card-visual img cover"
        style="background: url('https://dummyimage.com/290x220/00a2ff/fff')"
      ></div>
      <div class="card-contents">
        <i
          class="icon-svg svg-size dtalks-icons dtalks-icons-icon_article"
          style="width: 50px; height: 50px;"
        ></i>
        <p class="text-title">황의홍 만세!</p>
        <p class="text-sub">Sub script for this website</p>
      </div>
      <div class="card-footer">
        <p class="text-footer">source</p>
      </div>
    </div>

    <div class="module-card radius-6 uihong2">
      <div
        class="card-visual img cover"
        style="background: url('https://dummyimage.com/290x220/00a2ff/fff')"
      ></div>
      <div class="card-contents">
        <p class="text-title">황의홍</p>
        <p class="text-sub">
          Planning Helps Make A Party Perfect Keep Dinner Simple Heat Frozen …
        </p>
        <div
          class="icon-favicon"
          :style="{ background: '~/assets/img/icon/pinter.png' }"
        ></div>
      </div>
      <div class="card-footer">
        <div class="text-writer">
          <span class="writer-by">By</span>
          <span class="writer-name">Little Little Star</span>
        </div>
        <span
          class="module-text-icon icon-30 radius-15"
          style="background: #ddd;"
        >
          <!-- 이미지에 따라 색상을 넣어주세요 -->
          <em class="" style="color: #000;">Category</em>
        </span>
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
