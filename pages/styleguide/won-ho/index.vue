<template>
  <style-guide base-path="/styleguide/won-ho">
    <template v-slot:content>
      <div class="root">
        <h2 class="layout-title">
          Layout Style 01 <span class="txt-1920">1920px</span
          ><span class="txt-1200">1200px</span>
        </h2>
        <div class="layout-view">
          <div class="layout-card-view">
            <div
              class="card-ui"
              style="width: 184px; height: 184px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 184px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 184px; height: 184px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 184px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 184px; height: 184px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 184px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 184px; height: 184px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 184px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 184px; height: 184px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 184px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 184px; height: 184px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 184px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 284px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">4 col</p>
                <p>width: 284px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 284px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">4 col</p>
                <p>width: 284px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 284px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">4 col</p>
                <p>width: 284px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 284px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">4 col</p>
                <p>width: 284px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 384px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">3 col</p>
                <p>width: 384px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 384px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">3 col</p>
                <p>width: 384px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 384px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">3 col</p>
                <p>width: 384px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 584px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 584px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 584px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">2 col</p>
                <p>width: 584px</p>
              </div>
            </div>
            <div
              class="card-ui"
              style="width: 1184px; height: 284px; margin-right: 16px; margin-bottom: 16px;"
            >
              <div class="size-info">
                <p class="tit">1 col</p>
                <p>width: 1184px</p>
              </div>
            </div>
          </div>
          <div class="layout-margin"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-gutter"></div>
          <div class="layout-column"></div>
          <div class="layout-margin"></div>
        </div>
      </div>
    </template>
  </style-guide>
</template>

<script>
import Template from '~/components/styleguide/Template'

export default {
  components: {
    'style-guide': Template
  }
}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  position: relative;
  background: #dadada;
}
</style>
