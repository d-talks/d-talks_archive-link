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

<style lang="css" scoped>
.root {
  width: 100%;
}
.module-text-icon {
    display: inline-block;
    min-width: 40px;
    font-size: 14px;
    font-weight: bold;
    padding: 0 12px;
    background: #ffffff;

}

.icon-30 {
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.radius-15 {
    border-radius: 15px;
}

/* yh S */
.card-size-290{
    width: 290px;
    height: auto;
}
.radius-6{
    border-radius: 6px;
    overflow: hidden;
}

.module-card.yh {
    background: #ffffff;
}
.module-card.yh .card-visual {
    width: 100%;
    height: 210px;
}
.module-card.yh .card-visual img {
    width: 100%;
}
.module-card.yh .card-contents {
    padding: 40px 14px;
    position: relative;
}
.module-card.yh .text-title {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
}
.module-card.yh .text-sub {
    font-size: 14px;
    font-weight: normal;
    color: #000000;
}
.module-card.yh .icon-favicon{
    width: 50px;
    height: 50px;
    border-radius: 15px;
    overflow: hidden;
    background-size: 50px 50px;
    position: absolute;
    top: -25px;
    left: 14px;
}
.module-card.yh .card-footer {
    padding: 0 14px 14px;
    position: relative;
}
.module-card.yh .text-writer {
    font-size: 12px;
    font-weight: bold;
    line-height: 30px;
}
.module-card.yh .text-by {}
.module-card.yh .text-name {}
.module-card.yh .module-text-icon{
    position: absolute;
    top: 0;
    right: 14px;
}
</style>
