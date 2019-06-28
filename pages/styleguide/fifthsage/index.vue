<template>
  <div class="styleguide">
    <div class="h3">Layout Style (fifthsage) <small>1920px</small></div>
    <div class="container mt-3">
      <div class="layout grid-list wrap">
        <template v-for="i in 12">
          <div :key="i" class="col-1">
            <div class="showcase flex align-center justify-center column">
              <p class="h3">1</p>
            </div>
          </div>
        </template>

        <template v-for="i in 6">
          <div :key="i" class="col-2">
            <div class="showcase flex align-center justify-center column">
              <p class="h3">2</p>
            </div>
          </div>
        </template>

        <template v-for="i in 4">
          <div :key="i" class="col-3">
            <div class="showcase flex align-center justify-center column">
              <p class="h3">3</p>
            </div>
          </div>
        </template>

        <template v-for="i in 3">
          <div :key="i" class="col-4">
            <div class="showcase flex align-center justify-center column">
              <p class="h3">4</p>
            </div>
          </div>
        </template>

        <template v-for="i in 2">
          <div :key="i" class="col-6">
            <div class="showcase flex align-center justify-center column">
              <p class="h3">6</p>
            </div>
          </div>
        </template>

        <template v-for="i in 1">
          <div :key="i" class="col-12">
            <div class="showcase flex align-center justify-center column">
              <p class="h3">12</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.styleguide {
  width: 100%;
  position: relative;

  .columns {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  div[class*='col-'] {
    > .showcase {
      border: 3px solid magenta;
      height: 284px;
      margin-bottom: 4px;
    }
  }
}
</style>
