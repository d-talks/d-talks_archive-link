<template>
  <div class="root">
    <div class="module-card uihong">
      <div class="card-visual">
        <img src="https://dummyimage.com/260x200px" alt="card visual image" />
      </div>
      <div class="card-contents">
        <i
          class="icon-svg svg-size dtalks-icons dtalks-icons-icon_article"
          style="width: 50px; height: 50px;"
        ></i>
        <p class="text-title">황의홍</p>
        <p class="text-sub">Sub script for this website</p>
      </div>
      <div class="card-footer">
        <p class="text-footer">source</p>
      </div>
    </div>

    <div class="module-card card-size-290 radius-6 uihong2">
      <div class="card-visual">
        <img src="https://dummyimage.com/290x220px" alt="card visual image" />
      </div>
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

<style lang="scss" scoped>
.root {
  width: 260px;
}

.module-card.uihong {
  width: 260px;
  min-height: 250px;
  display: block;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  margin-bottom: 30px;
}
.module-card.uihong .card-visual {
}
.module-card.uihong .card-visual img {
  border-radius: 5px 5px 0px 0px;
}
.module-card.uihong .card-contents {
}
.module-card.uihong .card-contents .icon-svg {
  position: absolute;
  right: 20px;
  bottom: 40px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}
.module-card.uihong .card-contents .text-title {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 10px;
}
.module-card.uihong .card-contents .text-sub {
  color: #999999;
  font-size: 13px;
  font-weight: 400;
  padding: 0px 10px;
}
.module-card.uihong .card-footer {
}
.module-card.uihong .card-footer .text-footer {
  color: #999999;
  font-size: 11px;
  font-weight: 400;
  padding: 10px;
  display: block;
  margin-bottom: 5px;
}

.card-size-290 {
  width: 290px;
  height: auto;
}
.radius-6 {
  border-radius: 6px;
  overflow: hidden;
}
.module-card.uihong2 {
  background: #fff;
}

.module-card.uihong2 .card-visual {
  width: 290px;
  height: auto;
}
.module-card.uihong2 .card-visual img {
  width: 100%;
}
.module-card.uihong2 .card-contents {
  padding: 40px 14px;
  position: relative;
}
.module-card.uihong2 .card-contents .text-title {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}
.module-card.uihong2 .card-contents .text-sub {
  font-size: 14px;
  font-weight: normal;
  color: #000;
}
.module-card.uihong2 .card-contents .icon-favicon {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: #000;
  background-size: 50px 50px;
  overflow: hidden;
  position: absolute;
  top: -25px;
  left: 14px;
}

.module-card.uihong2 .card-footer {
  padding: 0 14px 14px;
  position: relative;
}
.module-card.uihong2 .card-footer .text-writer {
  line-height: 30px;
  font-size: 12px;
  font-weight: 500;
}
.module-card.uihong2 .card-footer .text-writer .writer-by {
}
.module-card.uihong2 .card-footer .text-writer .writer-name {
}

.module-card.uihong2 .card-footer .module-text-icon {
  display: inline-block;
  min-width: 40px;
  font-size: 14px;
  font-weight: 600;
  padding: 0 12px;
  background-color: #ffffff;
  position: absolute;
  top: 0px;
  right: 14px;
}
.module-card.uihong2 .card-footer .icon-30 {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.module-card.uihong2 .card-footer .radius-15 {
  border-radius: 15px;
}
</style>
