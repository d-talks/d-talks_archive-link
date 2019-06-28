<template>
  <div class="root">
    <div class="module-card radius-6 fifthsage">
      <a href="">
        <div
          class="card-visual img cover"
          style="background: url('https://dummyimage.com/260x200/00a2ff/fff')"
        ></div>
        <div class="card-contents">
          <p class="text-title">
            조오성
          </p>
          <p class="text-sub">
            풀스택 개발자 / 스타트업 CTO
          </p>
          <p class="text-source">
            ㅋㅋ
          </p>
          <i
            class="icon-svg svg-size svg-awards"
            style="width: 50px; height: 50px;"
          ></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.module-card.fifthsage {
  position: relative;
}

.card-visual {
width: 100%;
height: 360px;
}

.module-card.fifthsage:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.module-card.fifthsage .card-contents {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 1rem;
}

.module-card.fifthsage .card-contents p {
  color: white !important;
}

.module-card.fifthsage .card-contents p.text-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.module-card.fifthsage .card-contents i {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
