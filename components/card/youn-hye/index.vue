<template>
  <div class="root">
    <!-- module card basic = width: 260px; -->
    <!-- card-size-nnn : 숫자 수치에 따라 크기보정이 가능하도록 설계 -->
    <!-- group-name = wholee / uihong / 오성 / 지원 / 유네 각 이름 추가하면 UI변경 -->
    <div class="module-card radius-6 yh">
      <div
        class="card-visual img cover"
        style="background: url('https://dummyimage.com/290x220/00a2ff/fff')"
      ></div>
      <div class="card-contents">
        <div class="text-title">
          박윤혜
        </div>
        <div class="text-sub">
          디자이너 / 엔트리
        </div>
        <div
          class="icon-favicon"
          :style="{ background: '~/assets/img/icon/pinter-100x100.png' }"
        ></div>
      </div>
      <div class="card-footer">
        <div class="text-writer">
          <span class="writer-by">by</span>
          <span class="writer-name">Little Little Star</span>
        </div>
        <span
          class="module-text-icon icon-30 radius-15"
          style="background:#ddd;"
        >
          <em style="color: #000;">Category</em>
        </span>
      </div>

      <i class="heart outline icon"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" src="./style.scss" scoped></style>
